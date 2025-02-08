// import Image from 'next/image'
// import React from 'react'

// const OurMenu = () => {
//   return (
 
//   <div className='w-[1184px] h-[756px]  bg-black'>
//    <div className=' flex flex-col justify-center items-center'>
//    <h3 className='w-[200px] h-[40px]  font-normal text-[32px] text-[#FF9F0D]'>Choose & pick</h3>
//     <h1 className='w-[358px] h-[46px]  font-Helvetica font-[700] text-[48px] text-[white]'><span className='text-[#FF9F0D]'>Fr</span>om Our Menu</h1>
//   </div>
   
// <div className='w-[1056px] h-[28px] flex justify-evenly items-center mt-[70px] ml-20'>
//     <p className='w-[95px] h-[28px] text-[#FF9F0D] font-inter font-[700] text-[20px]'>Breakfast</p>
//     <p className='w-[58px] h-[28px] text-[white] font-inter font-[400] text-[20px]'> Lunch</p>
//     <p className='w-[62px] h-[28px] text-[white] font-inter font-[400] text-[20px]'>Dinner</p>
//     <p className='w-[74px] h-[28px] text-[white] font-inter font-[400] text-[20px]'>Dessert</p>
//     <p className='w-[50px] h-[28px] text-[white] font-inter font-[400] text-[20px]'>Drink</p>
//     <p className='w-[58px] h-[28px] text-[white] font-inter font-[400] text-[20px]'>Snack</p>
//     <p className='w-[59px] h-[28px] text-[white] font-inter font-[400] text-[20px]'>Soups</p>
// </div>

//     {/* Our Menu Main Image */}
// <div className='w-[400px] h-[406px] mt-[70px] flex'
//      style={{backgroundImage:"url('/images/ourmenu1.png')"}}>
//      <Image src="/images/ourmenu2.png " alt="image2 " width={316} height={262} className='ml-[70px] mt-[20px]'/>
   
//    {/* Image 01 */}
// <div className='w-[376px] h-[406px] ml-[30px] '>
//   <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
//   <Image src="/images/lettuceleaf.png " alt="image2 " width={80} height={79} />
//   <div>
//      <h1 className=' font-inter font-[700] text-[20px] text-[white]'>Lettuce Leaf</h1>
//      <p className=' font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
//      <p className=' font-inter font-[700] text-[18px] text-[#FF9F0D]'>12.5$</p>
//   </div>
//      </div>

//      {/* Image 02 */}
//      <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
//   <Image src="/images/breakfast.png " alt="image2 " width={80} height={79} />
//   <div>
//      <h1 className=' font-inter font-[700] text-[20px] text-[white]'>Fresh Breakfast</h1>
//      <p className=' font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
//      <p className=' font-inter font-[700] text-[18px] text-[#FF9F0D]'>14.5$</p>
    
//   </div>
//      </div>


//     {/* Image 03 */}
//      <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
//   <Image src="/images/butter.png " alt="image2 " width={80} height={79} />
//   <div>
//      <h1 className=' font-inter font-[700] text-[20px] text-[white]'>Mild Butter</h1>
//      <p className=' font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
//      <p className=' font-inter font-[700] text-[18px] text-[#FF9F0D]'>12.5$</p>
     
//   </div>
//      </div>


//       {/* Image 04 */}
//      <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
//   <Image src="/images/bread.png " alt="image2 " width={80} height={79} />
//   <div>
//      <h1 className=' font-inter font-[700] text-[20px] text-[white]'>Mild Butter</h1>
//      <p className=' font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
//      <p className=' font-inter font-[700] text-[18px] text-[#FF9F0D]'>12.5$</p>
     
//   </div>
//      </div>
// </div>


// {/* Image 05 */}
// <div className='w-[276px] h-[406px] ml-[10px] '>
//   <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
//   <Image src="/images/cheese.png " alt="image5 " width={80} height={79} />
//   <div>
//      <h1 className=' font-inter font-[700] text-[20px] text-[white]'>Lettuce Leaf</h1>
//      <p className=' font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
//      <p className=' font-inter font-[700] text-[18px] text-[#FF9F0D]'>12.5$</p>
//   </div>
//      </div>

//      {/* Image 06 */}
//      <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
//   <Image src="/images/butter.png " alt="image6 " width={80} height={79} />
//   <div>
//      <h1 className=' font-inter font-[700] text-[20px] text-[white]'>Fresh Breakfast</h1>
//      <p className=' font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
//      <p className=' font-inter font-[700] text-[18px] text-[#FF9F0D]'>14.5$</p>
    
//   </div>
//      </div>


//     {/* Image 07 */}
//      <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
//   <Image src="/images/beef.png " alt="image7 " width={80} height={79} />
//   <div>
//      <h1 className=' font-inter font-[700] text-[20px] text-[white]'>Mild Butter</h1>
//      <p className=' font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
//      <p className=' font-inter font-[700] text-[18px] text-[#FF9F0D]'>12.5$</p>
     
//   </div>
//      </div>


//       {/* Image 08 */}
//      <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
//   <Image src="/images/mushroom.png " alt="image8 " width={80} height={79} />
//   <div>
//      <h1 className=' font-inter font-[700] text-[20px] text-[white]'>Mild Butter</h1>
//      <p className=' font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
//      <p className=' font-inter font-[700] text-[18px] text-[#FF9F0D]'>12.5$</p>
     
//   </div>
//      </div>
// </div>
//   </div> 
//     </div>
 
//   )
// }

// export default OurMenu

import React from 'react';
import Image from 'next/image';

const OurMenu = () => {
  return (
    <div className="w-full max-w-[1184px] mx-auto bg-black p-4">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="text-[#FF9F0D] font-normal text-[24px] sm:text-[32px]">
          Choose & pick
        </h3>
        <h1 className="font-Helvetica font-[700] text-[28px] sm:text-[48px] text-white">
          <span className="text-[#FF9F0D]">Fr</span>om Our Menu
        </h1>
      </div>

      {/* Menu Categories */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
        <p className="text-[#FF9F0D] font-inter font-[700] text-[16px] sm:text-[20px] cursor-pointer">
          Breakfast
        </p>
        <p className="text-white font-inter font-[400] text-[16px] sm:text-[20px] cursor-pointer">
          Lunch
        </p>
        <p className="text-white font-inter font-[400] text-[16px] sm:text-[20px] cursor-pointer">
          Dinner
        </p>
        <p className="text-white font-inter font-[400] text-[16px] sm:text-[20px] cursor-pointer">
          Dessert
        </p>
        <p className="text-white font-inter font-[400] text-[16px] sm:text-[20px] cursor-pointer">
          Drink
        </p>
        <p className="text-white font-inter font-[400] text-[16px] sm:text-[20px] cursor-pointer">
          Snack
        </p>
        <p className="text-white font-inter font-[400] text-[16px] sm:text-[20px] cursor-pointer">
          Soups
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {/* Main Image */}
        <div
          className="relative w-full sm:w-[400px] h-[300px] sm:h-[406px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ourmenu1.png')" }}
        >
          <Image
            src="/images/ourmenu2.png"
            alt="Menu Item"
            width={316}
            height={262}
            className="absolute top-[20px] left-1/2 transform -translate-x-1/2"
          />
        </div>

        {/* Left Menu Items */}
        <div className="flex-1 flex flex-col gap-6">
          {[
            { src: "/images/lettuceleaf.png", title: "Lettuce Leaf", price: "12.5$" },
            { src: "/images/breakfast.png", title: "Fresh Breakfast", price: "14.5$" },
            { src: "/images/butter.png", title: "Mild Butter", price: "12.5$" },
            { src: "/images/bread.png", title: "Soft Bread", price: "12.5$" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image src={item.src} alt={item.title} width={80} height={79} />
              <div>
                <h1 className="font-inter font-[700] text-[16px] sm:text-[20px] text-white">
                  {item.title}
                </h1>
                <p className="font-inter font-normal text-[12px] sm:text-[14px] text-white">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="font-inter font-[700] text-[14px] sm:text-[18px] text-[#FF9F0D]">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Menu Items */}
        <div className="flex-1 flex flex-col gap-6">
          {[
            { src: "/images/cheese.png", title: "Lettuce Leaf", price: "12.5$" },
            { src: "/images/butter.png", title: "Fresh Breakfast", price: "14.5$" },
            { src: "/images/beef.png", title: "Mild Butter", price: "12.5$" },
            { src: "/images/mushroom.png", title: "Mushroom Soup", price: "12.5$" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image src={item.src} alt={item.title} width={80} height={79} />
              <div>
                <h1 className="font-inter font-[700] text-[16px] sm:text-[20px] text-white">
                  {item.title}
                </h1>
                <p className="font-inter font-normal text-[12px] sm:text-[14px] text-white">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="font-inter font-[700] text-[14px] sm:text-[18px] text-[#FF9F0D]">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
