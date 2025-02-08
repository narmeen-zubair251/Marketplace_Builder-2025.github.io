// About Us Section//
import React from "react"
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

const AboutUs = () => {
    return (
      <div className='w-full max-w-[1184px] lg:h-[850px] h-[1200px] flex flex-col  lg:flex-row sm:justify-center sm:items-center  pl-14 pt-10   bg-black'>
      <div className="">
          
           <h3 className=' text-[#FF9F0D]  font-[400]  text-[32px]  font-Great_Vibes '>About us</h3>
  <h1 className=' w-[500px] md:w-[550px] lg:w-[600px] mt-[10px] mb-4 text-[white]  font-[700]  text-[60px]  font-inter'><span className='text-[#FF9F0D]'>We</span> Create the best foody product</h1>
   
   
    <p className=' sm:w-[450px] md:w-[500px] lg:w-[536px] font-inter font-[400] text-[16px]  text-[white]  mb-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
   </p>
   
   {/* check Marks */}
  <div className="flex  text-white">
    <FaCheck className="w-[20px] h-[25px] mb-3"/>
    <p className="  ml-[20px] font-normal text-[18px] font-inter text-[white]"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
    </div>
   
    <div className="flex  text-white">
    <FaCheck className="w-[20px] h-[25px] "/>
    <p className="  ml-[20px] font-normal text-[18px] font-inter text-[white]">  Quisque diam pellentesque bibendum non dui volutpat fringilla .</p>
    </div>
    
    <div className="flex text-white mt-[10px] ">
    <FaCheck className="w-[20px] h-[25px]"/>
    <p className="ml-[20px] mb-4 font-normal text-[18px] font-inter text-[white]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
        <Link href="/blog">
        <button className='  w-[190px] h-[60px] bg-[#FF9F0D] font-inter text-[#E0DFDF] text-center border-none rounded-[30px] hover:scale-110 transition-transform 
            duration-300 ease-in-out'>Read More</button></Link>
       
        
       
    
    </div>
         {/* Image Section */}
        <div>
        <div className="sm:ml-5">  
            <Image src="/images/eggs.png" alt="eggs" width={400} height={180} className=" md:w-[500px] md:h-[200px] lg:w-[500px] lg:h-[280px] mt-[50px]"/>
        </div >
      
    <div className="flex w-[500px]  h-[170px] gap-[10px] sm:ml-5">
    <div  className=" mt-[12.5px] ">
         <Image src="/images/second.png" alt="second" width={180} height={150} className="md:w-[250px] md:h-[170px] lg:w-[330px] lg:h-[170px]"/>
         </div>
    
    <div className="ml-[5px] mt-[12.5px] ">
    <Image src="/images/third.png" alt="third" width={200} height={150} className=" md:w-[250px] md:h-[170px] lg:w-[330px] lg:h-[170px]"/>
    </div> 
        </div>  
          </div>
           
       
        
        
        
        </div>
      
 
    
   
  
    )
  }  
  
   export default AboutUs ;
    
      
    

 