import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Menu from '../Menu/page'
import Link from 'next/link'

const Create = () => {
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


           <Menu/>
            </div>

  )
}

export default Create