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
              <SignUpButton>
                <UserButton/>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              
            </SignedIn>
          </header>

         <div className='w-full max-w-4xl mx-auto shadow-lg my-4 p-4 sm:p-6 rounded-2xl bg-white'>
          <div className='w-full flex justify-center'>
          <TextType 
          className='text-4xl'
          text={[`Hi There, ${user.fullName||'Guest'}`]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={false}
          cursorCharacter="|"
          />
          </div>

          <div className='flex gap-4 mt-10 justify-evenly'>

            <div className='text-white text-2xl bg-purple-950 p-4 rounded-4xl cursor-pointer'>Create New Page</div>
            <div className='text-white text-2xl bg-purple-950 p-4 rounded-4xl cursor-pointer'>Your Page</div>

          </div>

         </div>

         
            </div>

  )
}

export default Create