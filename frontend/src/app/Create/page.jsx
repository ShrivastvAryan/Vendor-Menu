'use client'
import React from "react";
import Link from "next/link";
import useRestaurantStore from "../../../useRestaurantStore";
import Navbar from "../Components/Navbar";

const Create = () => {
  const { restaurant, setRestaurantField } = useRestaurantStore();

  return (
    <>
    <Navbar/>
    <div>
      <p className="text-4xl font-semibold text-center">Create Your Page</p>

      <div className="w-screen flex justify-center items-center">
        <form className="w-[90vw] md:w-[50vw] shadow-lg my-4 p-6 rounded-2xl bg-white">
          <label className="block mb-2 text-lg font-semibold text-gray-700">
            Restaurant Name
          </label>
          <input
            type="text"
            value={restaurant.restaurantName}
            onChange={(e) => setRestaurantField("restaurantName", e.target.value)}
            placeholder="Enter restaurant name"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={true}
          />

          <label className="block mb-2 text-lg font-semibold text-gray-700 mt-3.5">
            Address
          </label>
          <input
            type="text"
            value={restaurant.restaurantAddress}
            onChange={(e) => setRestaurantField("restaurantAddress", e.target.value)}
            placeholder="Enter address"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={true}
          />

          <label className="block mb-2 text-lg font-semibold text-gray-700 mt-3.5">
            Phone No.
          </label>
          <input
            type="text"
            value={restaurant.restaurantNumber}
            onChange={(e) => setRestaurantField("restaurantNumber", e.target.value)}
            placeholder="Enter phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={true}
          />

          <Link href="/MenuForm">
            <button
              type="button"
              className="mt-4 bg-[#FFDE21] text-black font-semibold p-2 rounded-2xl px-4  hover:scale-105 hover:shadow-lg hover:brightness-105 transition-all duration-200 cursor-pointer"
            >
              Next
            </button>
          </Link>
        </form>
      </div>
    </div>
    </>
  );
};

export default Create;
