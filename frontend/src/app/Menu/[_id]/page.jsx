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
import QRCodeGenerator from '@/app/Components/QR';

// API function
const getRestaurantById = async (_id) => {
  const response = await api.get(`/api/public/${_id}`);
  return response.data;
};

const Menu = () => { 
  const params = useParams();
  const restaurantId = params?._id;

  const { data, error, isLoading } = useQuery({
    queryKey: ["restaurant", restaurantId],
    queryFn: async () => getRestaurantById(restaurantId),
    enabled: !!restaurantId,
  });

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Error: {error.message}</p>;

  const restaurant = data?.data;

  return (
    <>
      <div className="w-full max-w-4xl mx-auto shadow-lg my-6 p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {restaurant?.restaurantName || "Restaurant Name"}
          </h1>
          <h2 className="text-gray-700 mt-2">
            {restaurant?.restaurantNumber || "+91 XXXXX XXXXX"} •{" "}
            {restaurant?.restaurantAddress || "Restaurant Address"}
          </h2>
          <p className="text-gray-500 mt-2 italic">
            Authentic flavors, made with love ❤️
          </p>
        </div>

        {/* Sections */}
        {restaurant?.sections?.map((section, sectionIndex) => (
          <Accordion 
            type="single" 
            collapsible 
            key={sectionIndex} 
            className="mb-4 border rounded-xl overflow-hidden shadow-sm"
          >
            <AccordionItem value={`section-${sectionIndex}`}>
              <AccordionTrigger className="text-xl sm:text-2xl font-semibold px-4 py-3 bg-gray-100 hover:bg-gray-200 transition">
                {section.sectionName}
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-6 bg-white">
                <div className="max-h-[400px] overflow-y-auto pr-2 space-y-6">
                  {section?.items?.map((item, index) => (
                    <div 
                      key={index} 
                      className="pb-4 border-b border-gray-200 last:border-0"
                    >
                      {/* Item Header */}
                      <div className="flex flex-col sm:flex-row justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-medium text-gray-900">{item.name}</span>
                          <span
                            className={`h-3 w-3 rounded-full ${
                              item.type === 'Veg' ? "bg-green-600" : "bg-red-600"
                            }`}
                          ></span>
                        </div>

                        {/* Prices */}
                        <div className="flex gap-6 text-center text-sm sm:text-base">
                          <div>
                            <div className="font-semibold text-gray-800">Qtr.</div>
                            <div className="text-gray-600">₹{item.prices?.quarter || "-"}</div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">Half</div>
                            <div className="text-gray-600">₹{item.prices?.half || "-"}</div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">Full</div>
                            <div className="text-gray-600">₹{item.prices?.full || "-"}</div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      {item.description && (
                        <p className="text-gray-500 text-sm mt-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      {/* Floating QR Button */}
      <QRCodeGenerator _id={restaurantId} />
    </>
  )
}

export default Menu
