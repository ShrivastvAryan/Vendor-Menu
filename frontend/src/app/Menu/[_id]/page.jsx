'use client'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { useQuery } from "@tanstack/react-query";
import api from '../../../../Api/api';
import { useParams } from 'next/navigation';

// API function
const getRestaurantById = async (_id) => {
  const response = await api.get(`/${_id}`);
  return response.data; 
};

const Menu = () => { 
  const params = useParams();
  const restaurantId = params?._id;

  const { data, error, isLoading } = useQuery({
    queryKey: ["restaurant", restaurantId],
    queryFn: () => getRestaurantById(restaurantId),
    enabled: !!restaurantId,
  });

  console.log("API Response:", data);


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  const MenuItem = ({ data }) => {
  return (
    <>
     
    </>
  );
};


  return (
    <div className='w-full max-w-4xl mx-auto shadow-lg my-4 p-4 sm:p-6 rounded-2xl bg-white'>

         <div className='mb-6'>
      
        <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 text-center'>  {data?.data?.restaurantName || "Restaurant Name"}</h1>
        <h2 className='text-md text-gray-800 text-center mt-3'>{data?.data?.restaurantNumber || "+91 XXXXX XXXXX"} | {data?.data?.restaurantAddress || "Restaurant Address"}</h2>
        <p className='text-gray-600 text-center mt-2'>Authentic flavors, made with love</p>
      </div>

      {data?.data?.sections?.map((section,sectionIndex)=>(
      <div>
      

      <Accordion type="single" collapsible className='space-y-2'>
       
       {/*  <AccordionItem value="best-sellers" className='border rounded-lg'>
          <AccordionTrigger className='text-xl sm:text-2xl px-4 hover:bg-gray-50'>
            Best Sellers
          </AccordionTrigger>
          <AccordionContent className='px-4 pb-4'>
            <div className='max-h-96 overflow-y-auto pr-2'>
              {menu.bestSellers?.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem> */}

        <AccordionItem value="all" className='border rounded-lg mb-2'>
         <div key={sectionIndex}>
          <AccordionTrigger className='text-xl sm:text-2xl px-4 hover:bg-gray-50'>
            {section.sectionName}
          </AccordionTrigger>
          <AccordionContent className='px-4 pb-4'>
            <div className='max-h-96 overflow-y-auto pr-2'>
              
               {section?.items?.map((item, index) => (
        <div key={index} className="mb-4 last:mb-0">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <div className="flex flex-row gap-2 w-full sm:w-[60%]">
              <span className="text-xl">{item.name}</span>
              <span
                className={`h-3 w-3 rounded-full ${
                  item.type==='Veg' ? "bg-green-600" : "bg-red-600"
                } inline-block flex-shrink-0 mt-2`}
              ></span>
            </div>

            <div className="flex w-full sm:w-[40%] gap-3 sm:gap-6 justify-start sm:justify-end text-sm sm:text-base mt-2 lg:mt-0">
              <div className="text-center">
                <div className="font-semibold text-gray-800">Qtr.</div>
                <div className="text-gray-600">{item.prices?.quarter}</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-800">Half</div>
                <div className="text-gray-600">{item.prices?.half}</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-800">Full</div>
                <div className="text-gray-600">{item.prices?.full}</div>
              </div>
            </div>
          </div>

          <div className="text-gray-600 text-sm w-[60%] sm:text-[15px] mt-2 lg:mt-0 leading-relaxed">
            {item.description}
          </div>
          <div className="w-full h-[1px] bg-gray-200 my-3"></div>
        </div>
      ))}

            </div>
          </AccordionContent>
          </div>
        </AccordionItem>

      </Accordion>

      </div>

      ))}
    
    </div>
  )
}

export default Menu
