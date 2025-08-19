'use client'
import React, { useState, useEffect } from 'react';
import RotatingText from '@/blocks/Components/TextAnimation/TextAnimation'

import { QrCode, Smartphone, Menu, Users, Zap, ArrowRight, Star, CheckCircle } from 'lucide-react';

const Home = () => {

  return (
    <div className='flex md:flex-row'>
    <div className='flex flex-col gap-3 px-20 md:py-20 w-[50%]'>
        <span className='font-semibold text-7xl'>Grow Your</span>
        <span>
        <RotatingText
  texts={['Business', 'Reach', 'Presence']}
  mainClassName="px-2 sm:px-2  md:px-3 text-6xl bg-[#271E37] text-white font-semibold text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-xl"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
</span>

 <p className='mt-12 text-2xl text-gray-800'>Transform your restaurant with instant QR code menus. No more printing costs, real-time updates and 
  seamless customer experience
 </p>

<div className='flex gap-6 mt-6'>
 <div className=' flex flex-row justify-center gap-2 bg-[#271E37] text-white rounded-4xl p-2 px-4'><span className='inline-block'><QrCode/></span><span> Instant QR Menus</span></div>
 <div className=' flex flex-row justify-center gap-2 bg-[#271E37] text-white rounded-4xl p-2  px-4'><span  className='inline-block'><Smartphone/></span><span> Mobile Optimized</span></div>
  <div className=' flex flex-row justify-center gap-2 bg-[#271E37] text-white rounded-4xl p-2  px-4'><span  className='inline-block'><Zap/></span><span> Easy Updates</span></div>
 </div>

 <span className='w-full inline-block h-[2px] bg-black my-8'></span>

 <div className='flex flex-row gap-14'>
  <p className='text-xl'>100% Free</p>
  <p className='text-xl'>No Hidden Charges</p>
   <p className='text-xl'>Real Time Updates</p>
 </div>

    </div>
   

    <div className='w-[50%]'>
      <div className='transform transition-all duration-1000 delay-300'>
            <div className="relative">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl my-4">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white p-6">
                    {/* Mock Restaurant Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-800">Spice Garden</h3>
                      <p className="text-gray-600 text-sm">📍 123 Food Street, Delhi</p>
                      <p className="text-gray-600 text-sm">📞 +91 98765 43210</p>
                    </div>

                    {/* Mock Menu Categories */}
                    <div className="space-y-3">
                      {['Best Sellers', 'Main Course', 'Bread', 'Rice'].map((category, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-800">{category}</span>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* QR Code Animation */}
                    <div className="absolute bottom-6 right-6">
                      <div className="bg-black p-3 rounded-xl animate-pulse">
                        <QrCode className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Screen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

              
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Home