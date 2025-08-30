'use client'
import React, { useState, useEffect } from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedOut,
} from '@clerk/nextjs'
import Link from 'next/link'
import TextType from '@/blocks/Components/TextType/TextType'
import { useUser, useAuth } from "@clerk/nextjs"
import Navbar from '../Components/Navbar'
import api from '../../../Api/api'
import LogoLoader from '../Components/Loader'
import SmallLoader from '../Components/SmallLoader'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useMutation, useQueryClient } from "@tanstack/react-query"
import DeleteAlert from '../Components/Alert'

const Create = () => {

  const [pageId, setPageId] = useState(null)
  const [loadingPage, setLoadingPage] = useState(true)

  const { isLoaded, user } = useUser()
  const { getToken } = useAuth()
  const queryClient = useQueryClient()

  // clear state on logout
  useEffect(() => {
    if (isLoaded && !user) {
      setPageId(null)
      setLoadingPage(false)
      console.log("User logged out, cleared pageId from state.")
    }
  }, [isLoaded, user])

  // fetch page for logged-in user
  useEffect(() => {
    if (isLoaded && user) {
      const fetchPage = async () => {
        try {
          setLoadingPage(true)
          const token = await getToken()
          const res = await api.get("/api/restaurant/mypage", {
            headers: { Authorization: `Bearer ${token}` }
          })
          console.log("Fetched pageId:", res.data)
          setPageId(res.data._id)
        } catch (err) {
          console.error("No page found for this user.", err)
          setPageId(null)
        } finally {
          setLoadingPage(false)
        }
      }
      fetchPage()
    }
  }, [isLoaded, user, getToken])

  const deleteMutation = useMutation({
    mutationFn: async (pageId) => {
      const token = await getToken()
      return api.delete(`/api/restaurant/mypage/${pageId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
    },
    onSuccess: () => {
      toast.success("Page deleted successfully ")
      setPageId(null)
      queryClient.invalidateQueries(["mypage"])
    },
    onError: () => {
      toast.error("Failed to delete page ")
    }
  })

  if (!isLoaded) return <LogoLoader />

  return (
    <div>
      <Navbar />

      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
      </header>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />

      <div className="w-full max-w-2xl mx-auto shadow-xl my-8 p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-white to-gray-50">
        <div className="w-full flex justify-center">
          <TextType
            className="text-5xl font-bold text-gray-800 text-center"
            text={[`Hi There, ${user?.fullName || "Guest"} 👋`]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
          />
        </div>

        <div className="flex mt-12 justify-center gap-6">
          {loadingPage ? (
            <SmallLoader className="w-12 h-12" />
          ) : pageId ? (
            <>
              <Link href={`/Menu/${pageId}`}>
                <div className="px-6 py-4 text-lg sm:text-xl font-semibold rounded-xl 
                  bg-[#FFDE21] text-black shadow-md 
                  hover:scale-105 hover:shadow-lg hover:brightness-105 transition-all duration-200 cursor-pointer">
                  Your Page
                </div>
              </Link>

             <DeleteAlert
            isLoading={deleteMutation.isLoading}
            onConfirm={() => deleteMutation.mutate(pageId)}
            />
            </>
          ) : (
            <Link href="/Create">
              <div className="px-6 py-4 text-lg sm:text-xl font-semibold rounded-xl 
                bg-[#FFDE21] text-black shadow-md 
                hover:scale-105 hover:shadow-lg hover:brightness-105 transition-all duration-200 cursor-pointer">
                Create Page
              </div>
            </Link>
          )}
        </div>

        <p className="text-gray-400 text-center mt-6">
          *Edit feature will be available soon
        </p>
      </div>
    </div>
  )
}

export default Create
