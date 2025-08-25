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

const Create = () => {
   const [progress, setProgress] = React.useState(50)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])


  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return(
      <div className='w-screen h-screen flex items-center justify-center'>
      <Progress value={progress} className="w-[50%]" />
      </div>
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

    {/* Your Page Button */}
    <Link href=''>
      <div className="px-6 py-4 text-lg sm:text-xl font-semibold rounded-xl 
        bg-[#FFDE21] text-black shadow-md 
        hover:scale-105 hover:shadow-lg hover:brightness-105 transition-all duration-200 cursor-pointer">
        Your Page/Create Page
      </div>
    </Link>

    <Link href=''>
      <div className="px-6 py-4 text-lg sm:text-xl font-semibold rounded-xl 
        bg-[#FFDE21] text-black shadow-md 
        hover:scale-105 hover:shadow-lg hover:brightness-105 transition-all duration-200 cursor-pointer">
        Update Page
      </div>
    </Link>
  </div>
</div>

         
    </div>

  )
}

export default Create