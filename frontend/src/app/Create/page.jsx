import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
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
 

        <p className='text-4xl font-semibold text-center mb-3'>Create Your Page</p>

           <div className='w-screen flex justify-center items-center'>
            <form className=" w-[90vw] md:w-[50vw] shadow-lg my-4 p-6 rounded-2xl bg-white">
            <label className="block mb-2 text-lg font-semibold text-gray-700">
             Restaurant Name
            </label>
             <input
             type="text"
             placeholder="Enter restaurant name"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <label className="block mb-2 text-lg font-semibold text-gray-700 mt-3.5">
             Address
            </label>
             <input
             type="text"
             placeholder="Enter restaurant name"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

             <label className="block mb-2 text-lg font-semibold text-gray-700 mt-3.5">
             Phone No.
            </label>
             <input
             type="text"
             placeholder="Enter restaurant name"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Link href='/Menu'>
            <button className='mt-4 bg-black text-white p-2 rounded-2xl px-4 cursor-pointer'>Next</button>
            </Link>
         </form>
         </div>
            </div>

  )
}

export default Create