'use client'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { CirclePlus, Trash2 } from 'lucide-react';

const MenuForm = () => {
  // state to hold multiple items
  const [section,setSection]=useState([{}])
  const [items, setItems] = useState([{}]);

  // Add new empty item
  const addItem = () => {
    setItems([...items, {}]);
  };

  const addSection=()=>{
    setSection([...section,{}])
  }

  const deleteSection=()=>{
    setSection(section.filter((_,i)=>i!==index))
  }

  // Delete item by index
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  // MenuItem component
  const MenuItem = ({ index }) => (
    <div className="mb-4 last:mb-0 relative border border-gray-200 rounded-xl p-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
        {/* Item Name + Food Type */}
        <div className="flex flex-row items-center gap-2 w-full sm:w-[60%] ml-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Item Name"
          />
          <span>
            <select
              name="foodtype"
              className="p-2 rounded-2xl border border-gray-300 px-2"
            >
              <option value="Veg" className="text-green-700 font-semibold">
                Veg
              </option>
              <option value="Non-Veg" className="text-red-700 font-semibold">
                Non-Veg
              </option>
            </select>
          </span>
        </div>

        {/* Price Inputs */}
        <div className="flex w-full sm:w-[40%] justify-between sm:justify-end gap-3 text-sm sm:text-base">
          <div className="flex flex-col items-center w-1/3">
            <div className="font-semibold text-gray-800">Qtr.</div>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl p-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Qtr. Price"
            />
          </div>
          <div className="flex flex-col items-center w-1/3">
            <div className="font-semibold text-gray-800">Half</div>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl p-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Half Price"
            />
          </div>
          <div className="flex flex-col items-center w-1/3">
            <div className="font-semibold text-gray-800">Full</div>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl p-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full Price"
            />
          </div>
        </div>
      </div>

      {/* Item Description */}
      <div className="mt-3 ml-2">
        <input
          type="text"
          className="border border-gray-300 rounded-xl w-[60%] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Item Description"
        />
      </div>

      {/* Delete Button */}
      <button
        onClick={() => deleteItem(index)}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto shadow-lg my-4 p-4 sm:p-6 rounded-2xl bg-white">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
          Create Your Menu
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Authentic flavors, made with love
        </p>
      </div>
     
      <Accordion type="single" collapsible className="space-y-2">
        <AccordionItem value="item-1" className="border rounded-lg">
          <AccordionTrigger className="text-xl sm:text-2xl px-4 hover:bg-gray-50">
            Best Sellers
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="max-h-96 overflow-y-auto pr-2">
              {/* Placeholder */}
            </div>
          </AccordionContent>
        </AccordionItem>
       
    {section.map((_,index)=>(
         <AccordionItem value="item-2" className="border rounded-lg" key={index}>
          <AccordionTrigger className="text-xl sm:text-2xl px-4 hover:bg-gray-50">
            <input
              type="text"
              className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter MainCourse"
            /> 

             <button
        onClick={() => deleteSection(index)}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        <Trash2 size={20} />
      </button>
            
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="max-h-96 overflow-y-auto pr-2">
              {/* Render items */}
              {items.map((_, index) => (
                <MenuItem key={index} index={index} />
              ))}

              {/* Add button */}
              <div className="w-full flex justify-center items-center">
                <button
                  onClick={addItem}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mt-2"
                >
                  <CirclePlus /> Add Item
                </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
    ))}
       
          <div className="w-full flex justify-center items-center">
                <button
                  onClick={addSection}
                  className="flex items-center gap-2 text-green-600 hover:text-green-800 mt-2"
                >
                  <CirclePlus /> Add New Section
                </button>
              </div>

      </Accordion>
    </div>
  );
};

export default MenuForm;
