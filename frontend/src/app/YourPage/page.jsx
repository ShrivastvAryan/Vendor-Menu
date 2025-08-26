'use client'
import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Menu from '../Menu/[_id]/page'
import Link from 'next/link'
import TextType from '@/blocks/Components/TextType/TextType'
import { useUser } from "@clerk/nextjs";
import { Progress } from '@/components/ui/progress'
import api from '../../../Api/api'
import { useState, useEffect } from 'react'
import { useAuth } from "@clerk/nextjs";
import LogoLoader from '../Components/Loader'

const Create = () => {
   const [progress, setProgress] = useState(50)

   const { getToken } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])


  const { isLoaded, user } = useUser();
  const [pageId, setPageId] = useState(null);

 useEffect(() => {
  if (isLoaded && user) {
    const fetchPage = async () => {
      try {
        const token = await getToken();
        const res = await api.get("/api/restaurant/mypage", {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log("Fetched pageId:", res.data);
        setPageId(res.data._id);
      } catch (err) {
        console.error("No page found for this user.", err);
        setPageId(null);
      }
    };

    fetchPage();
  }
}, [isLoaded, user]);
  

  if (!isLoaded) {
    return(
      <LogoLoader/>
    ) 
  }

  return (
    <div>

        <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
        <SignInButton />
        <SignUpButton />
        </SignedOut>

       </header>


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
    {/* Create Button}
    <Link href="/Create">
      <div className="px-6 py-4 text-lg sm:text-xl font-semibold rounded-xl 
        bg-[#FFDE21] text-black shadow-md 
        hover:scale-105 hover:shadow-lg hover:brightness-105 transition-all duration-200 cursor-pointer">
        Create New Page
      </div>
    </Link>*/}

      {pageId ? (
          <Link href={`/Menu/${pageId}`}>
            <div className="px-6 py-4 text-lg sm:text-xl font-semibold rounded-xl 
              bg-[#FFDE21] text-black shadow-md 
              hover:scale-105 hover:shadow-lg hover:brightness-105 transition-all duration-200 cursor-pointer">
              Your Page
            </div>
          </Link>
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
</div>

         
    </div>

    

  )
}

export default Create