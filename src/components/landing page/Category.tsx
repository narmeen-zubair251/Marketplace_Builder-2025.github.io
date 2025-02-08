 import React from 'react'
 import Image from 'next/image'



const Category = () => {
  return (
    <div className="w-full max-w-[1184px] lg:h-[600px] h-[1550px] bg-black">
      <div>
        <h3 className="text-[#FF9F0D] font-normal text-[32px] font-Great_Vibes flex justify-center items-center pt-5">
          Food Category
        </h3>
       <h1 className="mb-9 text-white font-[700] text-[48px] font-inter flex justify-center items-center text-center leading-[1.2]">
           Choose Food Item
</h1>

      </div>
      <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Add flex to individual grid items */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/category1.png"
            alt="Category image"
            width={245}
            height={200}
            className="rounded-[6px]"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/category2.png"
            alt="Category2"
            width={245}
            height={200}
            className="rounded-[6px]"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/category3.png"
            alt="Category3"
            width={245}
            height={200}
            className="rounded-[6px]"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/category4.png"
            alt="Category4"
            width={245}
            height={200}
            className="rounded-[6px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;


