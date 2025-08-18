import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Menu = () => {
  // Sample menu items for demonstration
  const menuItems = [
    {
      name: "Dal Makhni",
      isVeg: true,
      description: "Rich and creamy black lentils slow-cooked with butter, cream, and aromatic spices. A signature dish that's perfect for any occasion.",
      prices: { quarter: "--", half: "120/-", full: "220/-" }
    },
    {
      name: "Paneer Butter Masala",
      isVeg: true,
      description: "Soft paneer cubes in a rich tomato-based gravy with butter and cream. A classic North Indian favorite.",
      prices: { quarter: "80/-", half: "140/-", full: "260/-" }
    },
    {
      name: "Chicken Tikka Masala",
      isVeg: false,
      description: "Tender chicken pieces in a creamy tomato sauce with traditional Indian spices. Perfectly balanced flavors.",
      prices: { quarter: "100/-", half: "180/-", full: "320/-" }
    },
    {
      name: "Mutton Curry",
      isVeg: false,
      description: "Succulent mutton pieces slow-cooked in aromatic spices and onion-tomato gravy. A hearty and flavorful dish.",
      prices: { quarter: "120/-", half: "220/-", full: "400/-" }
    },
    {
      name: "Fish Curry",
      isVeg: false,
      description: "Fresh fish cooked in coconut milk with curry leaves and spices. A coastal delicacy with authentic flavors.",
      prices: { quarter: "110/-", half: "200/-", full: "360/-" }
    }
  ];

  const breadItems = [
    {
      name: "Butter Naan",
      isVeg: true,
      description: "Soft and fluffy bread baked in tandoor, brushed with butter. Perfect accompaniment to any curry.",
      prices: { quarter: "--", half: "45/-", full: "80/-" }
    },
    {
      name: "Garlic Naan",
      isVeg: true,
      description: "Aromatic naan bread topped with fresh garlic and herbs. A flavorful twist on the classic.",
      prices: { quarter: "--", half: "55/-", full: "90/-" }
    },
    {
      name: "Cheese Naan",
      isVeg: true,
      description: "Naan stuffed with melted cheese, crispy on outside and gooey inside. A cheese lover's delight.",
      prices: { quarter: "--", half: "70/-", full: "120/-" }
    },
    {
      name: "Tandoori Roti",
      isVeg: true,
      description: "Whole wheat bread cooked in tandoor. A healthier option with authentic smoky flavor.",
      prices: { quarter: "--", half: "25/-", full: "40/-" }
    }
  ];

  const riceItems = [
    {
      name: "Basmati Rice",
      isVeg: true,
      description: "Fragrant long-grain basmati rice, perfectly steamed. The ideal base for any curry dish.",
      prices: { quarter: "60/-", half: "100/-", full: "180/-" }
    },
    {
      name: "Jeera Rice",
      isVeg: true,
      description: "Aromatic basmati rice cooked with cumin seeds and ghee. Simple yet flavorful preparation.",
      prices: { quarter: "70/-", half: "120/-", full: "200/-" }
    },
    {
      name: "Biryani (Veg)",
      isVeg: true,
      description: "Fragrant basmati rice layered with vegetables and aromatic spices. Cooked in traditional dum style.",
      prices: { quarter: "120/-", half: "200/-", full: "350/-" }
    },
    {
      name: "Chicken Biryani",
      isVeg: false,
      description: "Premium basmati rice layered with tender chicken and spices. A royal feast in every bite.",
      prices: { quarter: "150/-", half: "280/-", full: "480/-" }
    },
    {
      name: "Mutton Biryani",
      isVeg: false,
      description: "Aromatic basmati rice with succulent mutton pieces. Slow-cooked to perfection with traditional spices.",
      prices: { quarter: "180/-", half: "320/-", full: "580/-" }
    }
  ];

  const MenuItem = ({ item }) => (
    <div className='mb-4 last:mb-0'>
      <div className='flex flex-col sm:flex-row gap-2 sm:gap-0'>
        <div className='flex flex-row gap-2 w-full sm:w-[60%]'>
          <span className='font-medium'>{item.name}</span>
          <span className={`h-3 w-3 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'} inline-block flex-shrink-0 mt-1`}></span>
        </div>

        <div className='flex w-full sm:w-[40%] gap-3 sm:gap-6 justify-start sm:justify-end text-sm sm:text-base mt-2 lg:mt-0'>
          <div className='text-center'>
            <div className='font-semibold text-gray-800'>Qtr.</div>
            <div className='text-gray-600'>{item.prices.quarter}</div>
          </div>
          <div className='text-center'>
            <div className='font-semibold text-gray-800'>Half</div>
            <div className='text-gray-600'>{item.prices.half}</div>
          </div>
          <div className='text-center'>
            <div className='font-semibold text-gray-800'>Full</div>
            <div className='text-gray-600'>{item.prices.full}</div>
          </div>
        </div>
      </div>
      
      <div className='text-gray-600 text-sm w-[60%] sm:text-[15px] mt-2 lg:mt-0 leading-relaxed'>
        {item.description}
      </div>
      <div className='w-full h-[1px] bg-gray-200 my-3'></div>
    </div>
  );

  return (
    <div className='w-full max-w-4xl mx-auto shadow-lg my-4 p-4 sm:p-6 rounded-2xl bg-white'>
      <div className='mb-6'>
        <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 text-center'>Our Menu</h1>
        <p className='text-gray-600 text-center mt-2'>Authentic flavors, made with love</p>
      </div>
      
      <Accordion type="single" collapsible className='space-y-2'>
        <AccordionItem value="item-1" className='border rounded-lg'>
          <AccordionTrigger className='text-xl sm:text-2xl px-4 hover:bg-gray-50'>
            Best Sellers
          </AccordionTrigger>
          <AccordionContent className='px-4 pb-4'>
            <div className='max-h-96 overflow-y-auto pr-2'>
              {menuItems.slice(0, 3).map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className='border rounded-lg'>
          <AccordionTrigger className='text-xl sm:text-2xl px-4 hover:bg-gray-50'>
            Main Course
          </AccordionTrigger>
          <AccordionContent className='px-4 pb-4'>
            <div className='max-h-96 overflow-y-auto pr-2'>
              {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className='border rounded-lg'>
          <AccordionTrigger className='text-xl sm:text-2xl px-4 hover:bg-gray-50'>
            Bread
          </AccordionTrigger>
          <AccordionContent className='px-4 pb-4'>
            <div className='max-h-96 overflow-y-auto pr-2'>
              {breadItems.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className='border rounded-lg'>
          <AccordionTrigger className='text-xl sm:text-2xl px-4 hover:bg-gray-50'>
            Rice
          </AccordionTrigger>
          <AccordionContent className='px-4 pb-4'>
            <div className='max-h-96 overflow-y-auto pr-2'>
              {riceItems.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Menu