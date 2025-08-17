import React from 'react'
import RotatingText from '@/blocks/Components/TextAnimation/TextAnimation'

const Home = () => {
  return (
    <>
    <div className='flex flex-row gap-3 px-12 md:py-20'>
        <span className='font-semibold text-6xl'>Grow Your</span>
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
    </div>

    </>
  )
}

export default Home