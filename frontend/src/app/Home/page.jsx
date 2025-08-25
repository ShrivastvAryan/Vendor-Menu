'use client'
import React, { useState, useEffect } from 'react';
import { QrCode, Smartphone, Menu, Users, Zap, ArrowRight, Star, CheckCircle } from 'lucide-react';

const RotatingText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <span className="relative inline-block px-3 md:px-4 text-5xl md:text-6xl bg-[#FFDE21] text-black font-bold rounded-2xl py-2 transition-all duration-500 hover:scale-105 hover:shadow-lg">
      {texts[currentIndex]}
    </span>
  );
};

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-white'>
      <div className='flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 lg:py-20'>
        
        {/* Left Section - Content */}
        <div className='flex flex-col gap-6 lg:w-[50%] mb-12 lg:mb-0'>
          
          {/* Main Heading */}
          <div className='space-y-4'>
            <h1 className='font-bold text-5xl md:text-7xl lg:text-8xl text-gray-900 leading-tight'>
              Grow Your
            </h1>
            <div className='flex items-center'>
              <RotatingText texts={['Business', 'Reach', 'Presence']} />
            </div>
          </div>

          {/* Description */}
          <p className='text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl mt-8'>
            Transform your restaurant with instant QR code menus. No more printing costs, real-time updates and 
            seamless customer experience.
          </p>

          {/* Feature Tags */}
          <div className='flex gap-3 mt-8 flex-wrap'>
            {[
              { icon: QrCode, text: 'Instant QR Menus' },
              { icon: Smartphone, text: 'Mobile Optimized' },
              { icon: Zap, text: 'Easy Updates' },
              { icon: CheckCircle, text: '100% Free' },
              { icon: Star, text: 'Real Time Updates' },
              { icon: Users, text: 'No Hidden Charges' }
            ].map((feature, index) => (
              <div key={index} className='group flex items-center gap-3 bg-[#FFDE21] text-black rounded-full px-5 py-3 font-semibold transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:shadow-md cursor-pointer'>
                <feature.icon className='w-5 h-5 group-hover:rotate-12 transition-transform duration-300' />
                <span className='text-sm md:text-base'>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className='mt-12'>
            <button className='group bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-xl flex items-center gap-3'>
              Get Started Free
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </button>
          </div>
        </div>

        {/* Right Section - Phone Mockup */}
        <div className='lg:w-[50%] flex justify-center lg:justify-end'>
          <div className='relative'>
            
            {/* Decorative Elements */}
            <div className='absolute -top-4 -left-4 w-20 h-20 bg-[#FFDE21] rounded-full opacity-20 animate-pulse'></div>
            <div className='absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-200 rounded-full opacity-30 animate-pulse delay-1000'></div>
            
            {/* Phone Mockup */}
            <div className="relative mx-auto w-80 h-[650px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-all duration-500">
              
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                
                {/* Status Bar */}
                <div className='flex justify-between items-center px-6 py-3 bg-gray-50'>
                  <span className='text-xs font-semibold'>9:41</span>
                  <div className='flex gap-1'>
                    <div className='w-4 h-2 bg-gray-300 rounded-full'></div>
                    <div className='w-4 h-2 bg-gray-300 rounded-full'></div>
                    <div className='w-4 h-2 bg-green-500 rounded-full'></div>
                  </div>
                </div>
                
                {/* Phone Screen Content */}
                <div className="flex-1 bg-gradient-to-b from-gray-50 to-white p-6">
                  
                  {/* Restaurant Header */}
                  <div className="text-center mb-8 bg-white rounded-2xl p-6 shadow-lg">
                    <div className='w-16 h-16 bg-[#FFDE21] rounded-full flex items-center justify-center mx-auto mb-4'>
                      <span className='text-2xl'>🍛</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Spice Garden</h3>
                    <p className="text-gray-600 text-sm mb-1">📍 123 Food Street, Delhi</p>
                    <p className="text-gray-600 text-sm">📞 +91 98765 43210</p>
                    <div className='flex justify-center mt-3 gap-1'>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className='w-4 h-4 text-yellow-400 fill-current' />
                      ))}
                      <span className='text-xs text-gray-600 ml-2'>4.8 (124 reviews)</span>
                    </div>
                  </div>

                  {/* Menu Categories */}
                  <div className="space-y-3">
                    {[
                      { name: 'Best Sellers', icon: '🔥', count: '8 items' },
                      { name: 'Main Course', icon: '🍽️', count: '12 items' },
                      { name: 'Bread & Rice', icon: '🍚', count: '6 items' },
                      { name: 'Beverages', icon: '🥤', count: '10 items' }
                    ].map((category, index) => (
                      <div key={index} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-102 group cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div className='flex items-center gap-3'>
                            <span className='text-2xl'>{category.icon}</span>
                            <div>
                              <span className="font-semibold text-gray-900">{category.name}</span>
                              <p className='text-xs text-gray-500'>{category.count}</p>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#FFDE21] group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Floating QR Code */}
                  <div className="absolute bottom-6 right-6">
                    <div className="bg-[#FFDE21] p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer group">
                      <QrCode className="w-8 h-8 text-black group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Screen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-[2.5rem]"></div>
              </div>

              {/* Home Indicator */}
              <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;