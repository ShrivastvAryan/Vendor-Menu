'use client'
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CirclePlus, Trash2 } from "lucide-react";
import useRestaurantStore from "../../../useRestaurantStore";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useAuth } from "@clerk/clerk-react";

const MenuForm = () => {

  const { getToken } = useAuth();

  const {
    restaurant,
    sections,
    addSection,
    deleteSection,
    updateSectionName,
    addItem,
    updateItemField,
    deleteItem,
    submitData,
  } = useRestaurantStore();

  const handleSubmit = async () => {
    try {
      const token = await getToken();
      const res = await submitData(token);
      console.log("Submitted successfully:", res);
       toast.success('Menu Saved Successfully', {
       position: "top-center",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: false,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "colored",
       transition: Bounce,
       });
    } catch (err) {
      console.error(err);
      toast.error('Error in saving the Menu', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
    }
  };

  return (
    <>
     <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>

    <div className="w-full max-w-4xl mx-auto shadow-lg my-4 p-4 sm:p-6 rounded-2xl bg-white">
      <div className="mb-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Create Your Menu
        </h1>
        <p className="text-gray-600 mt-2">Authentic flavors, made with love</p>
      </div>

      <Accordion type="single" collapsible className="space-y-2">
        {sections.map((section, sectionIndex) => (
          <AccordionItem
            value={`section-${sectionIndex}`}
            className="border rounded-lg relative"
            key={sectionIndex}
          >
            <AccordionTrigger className="text-xl sm:text-2xl px-4 hover:bg-gray-50">
              <input
                type="text"
                className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Section Name (e.g. Main Course)"
                value={section.sectionName}
                onChange={(e) => updateSectionName(sectionIndex, e.target.value)}
              />
              <div
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteSection(sectionIndex);
                }}
                className="absolute bottom-2 right-2 text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </div>
            </AccordionTrigger>

            <AccordionContent className="px-4 pb-4">
              <div className="max-h-96 overflow-y-auto pr-2">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="mb-4 last:mb-0 relative border border-gray-200 rounded-xl p-4"
                  >
                    {/* Item Name + Food Type */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                      <div className="flex flex-row items-center gap-2 w-full sm:w-[60%] ml-2">
                        <input
                          type="text"
                          className="flex-1 border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Item Name"
                          value={item.name}
                          onChange={(e) =>
                            updateItemField(sectionIndex, itemIndex, "name", e.target.value)
                          }
                        />
                        <select
                          className="p-2 rounded-2xl border border-gray-300 px-2"
                          value={item.type}
                          onChange={(e) =>
                            updateItemField(sectionIndex, itemIndex, "type", e.target.value)
                          }
                        >
                          <option value="Veg">Veg</option>
                          <option value="Non-Veg">Non-Veg</option>
                        </select>
                      </div>

                      {/* Price Inputs */}
                      <div className="flex w-full sm:w-[40%] justify-between sm:justify-end gap-3">
                        {["quarter", "half", "full"].map((size) => (
                          <div key={size} className="flex flex-col items-center w-1/3">
                            <div className="font-semibold text-gray-800">
                              {size === "quarter"
                                ? "quarter."
                                : size.charAt(0).toUpperCase() + size.slice(1)}
                            </div>
                            <input
                              type="text"
                              className="w-full border border-gray-300 rounded-xl p-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder={`${size} Price`}
                              value={item[size]??''}
                              onChange={(e) =>
                                updateItemField(sectionIndex, itemIndex, size, e.target.value)
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Item Description */}
                    <div className="mt-3 ml-2">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-[60%] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Item Description"
                        value={item.description}
                        onChange={(e) =>
                          updateItemField(sectionIndex, itemIndex, "description", e.target.value)
                        }
                      />
                    </div>

                    {/* Delete Item Button */}
                    <button
                      type="button"
                      onClick={() => deleteItem(sectionIndex, itemIndex)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}

                {/* Add Item Button */}
                <div className="w-full flex justify-center items-center">
                  <button
                    type="button"
                    onClick={() => addItem(sectionIndex)}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mt-2"
                  >
                    <CirclePlus /> Add Item
                  </button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}

        {/* Add New Section Button */}
        <div className="w-full flex justify-center items-center">
          <button
            type="button"
            onClick={addSection}
            className="flex items-center gap-2 text-green-600 hover:text-green-800 mt-2"
          >
            <CirclePlus /> Add New Section
          </button>
        </div>
      </Accordion>

      {/* Final Submit */}
      <div className="mt-6 text-center">
        <button
          onClick={handleSubmit}
          className="bg-[#FFDE21] text-black font-semibold p-2 rounded-2xl px-4  hover:scale-105 hover:shadow-lg hover:brightness-105 transition-all duration-200 cursor-pointer"
        >
          Save All Data
        </button>
      </div>
    </div>
    </>
  );
};

export default MenuForm;
