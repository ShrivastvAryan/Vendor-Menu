import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Menu = () => {
  return (
    <div className='w-[90vw] md:w-[50vw] shadow-lg my-4 p-6 rounded-2xl bg-white'>
        <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className='text-2xl'>Best Sellers</AccordionTrigger>
    <AccordionContent className='text-lg mt-2'>
      <div className='flex flex-row  text-xl'>
        <div className='flex flex-row gap-2 w-[60%]'>
            <span>Dal Makhni</span>
            <span className='h-3 w-3 rounded-full bg-green-900 inline-block'></span>
        </div>

        <div className='flex w-[40%] gap-6 justify-end'>
        <div>
            <div className='font-semibold'>Qtr.</div>
            <div>--</div>
        </div>
        <div>
            <div className='font-semibold'>Half</div>
             <div>120/-</div>
        </div>
        <div>
            <div className='font-semibold'>Full</div>
             <div>220/-</div>

        </div>

        </div>

      </div>
      <div className='text-gray-700 w-[50%] text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, tenetur? Adipisci, quam! Exercitationem, molestiae cupiditate distinctio harum delectus in, enim dicta adipisci laborum blanditiis dolores ducimus voluptates iusto dolorum maxime!</div>
      <div className='w-full h-[2px] bg-black my-3'></div>
    </AccordionContent>

     <AccordionContent className='text-lg mt-2'>
      <div className='flex flex-row  text-xl'>
        <div className='flex flex-row gap-2 w-[60%]'>
            <span>Dal Makhni</span>
            <span className='h-3 w-3 rounded-full bg-green-900 inline-block'></span>
        </div>

        <div className='flex w-[40%] gap-6 justify-end'>
        <div>
            <div className='font-semibold'>Qtr.</div>
            <div>--</div>
        </div>
        <div>
            <div className='font-semibold'>Half</div>
             <div>120/-</div>
        </div>
        <div>
            <div className='font-semibold'>Full</div>
             <div>220/-</div>

        </div>

        </div>

      </div>
      <div className='text-gray-700 w-[50%] text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, tenetur? Adipisci, quam! Exercitationem, molestiae cupiditate distinctio harum delectus in, enim dicta adipisci laborum blanditiis dolores ducimus voluptates iusto dolorum maxime!</div>
      <div className='w-full h-[2px] bg-black my-3'></div>
    </AccordionContent>

     <AccordionContent className='text-lg mt-2'>
      <div className='flex flex-row  text-xl'>
        <div className='flex flex-row gap-2 w-[60%]'>
            <span>Dal Makhni</span>
            <span className='h-3 w-3 rounded-full bg-green-900 inline-block'></span>
        </div>

        <div className='flex w-[40%] gap-6 justify-end'>
        <div>
            <div className='font-semibold'>Qtr.</div>
            <div>--</div>
        </div>
        <div>
            <div className='font-semibold'>Half</div>
             <div>120/-</div>
        </div>
        <div>
            <div className='font-semibold'>Full</div>
             <div>220/-</div>

        </div>

        </div>

      </div>
      <div className='text-gray-700 w-[50%] text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, tenetur? Adipisci, quam! Exercitationem, molestiae cupiditate distinctio harum delectus in, enim dicta adipisci laborum blanditiis dolores ducimus voluptates iusto dolorum maxime!</div>
      <div className='w-full h-[2px] bg-black my-3'></div>
    </AccordionContent>

     <AccordionContent className='text-lg mt-2'>
      <div className='flex flex-row  text-xl'>
        <div className='flex flex-row gap-2 w-[60%]'>
            <span>Dal Makhni</span>
            <span className='h-3 w-3 rounded-full bg-green-900 inline-block'></span>
        </div>

        <div className='flex w-[40%] gap-6 justify-end'>
        <div>
            <div className='font-semibold'>Qtr.</div>
            <div>--</div>
        </div>
        <div>
            <div className='font-semibold'>Half</div>
             <div>120/-</div>
        </div>
        <div>
            <div className='font-semibold'>Full</div>
             <div>220/-</div>

        </div>

        </div>

      </div>
      <div className='text-gray-700 w-[50%] text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, tenetur? Adipisci, quam! Exercitationem, molestiae cupiditate distinctio harum delectus in, enim dicta adipisci laborum blanditiis dolores ducimus voluptates iusto dolorum maxime!</div>
      <div className='w-full h-[2px] bg-black my-3'></div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </div>
  )
}

export default Menu