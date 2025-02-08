
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

// Hero Section //
const Hero = () => {
  return (
    <div className="w-full max-w-[1184px] md:flex md:justify-center md:items-center h-auto flex  items-center  bg-black py-24 ">
      <div className=" flex flex-col lg:flex-row">
        {/* Text Content */}
        <div className='ml-16 w-[450px] md:w-[550px] lg:w-[550px] sm:ml-0'>
          <h3>
            <span className="text-[#FF9F0D] text-[32px]  font-greatVibes">Its Quick & Amusing!</span>
          </h3>
          <h1 className=" mb-5 text-white font-bold text-[60px] sm:text[40px] font-inter">
            <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
          </h1>
          <p className=" font-inter text-white text-[16px]  mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
          </p>
          <div>
            <Link href="/menu">
            <button  className="w-[120px] md:w-[190px] md:h-[60px] h-[40px]  bg-[#FF9F0D] font-inter text-[#E0DFDF] text-center border-none rounded-[30px] hover:scale-110 transition-transform 
            duration-300 ease-in-out">
              See Menu
            </button></Link>
          </div>
        </div>
        {/* Hero Image Section */}
        <div>
          <Image src="/images/image1.png" alt="image" width={380} height={350} className=' lg:w-[500px] lg:h-[350px]  lg:ml-0 '/>
        </div>
      </div>
    </div>
  );
};

export default Hero;




