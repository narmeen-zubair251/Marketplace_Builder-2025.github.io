import React from 'react'
import Link from 'next/link'
import { FaAngleDown, FaRegHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import { IoCartOutline } from "react-icons/io5";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";



//Header Section//
export default function ResponsiveLayout() {
  return (
   
  <div className=' w-full max-w-[1184px] h-full bg-black text-white  '>
        {/* Top Heading Section */}
  <div className=" pt-10 flex justify-center items-center ">
  <h2 className="text-[24px] font-bold  text-white hover:text-[#FF9F0D]  font-inter" ><span className="text-[#FF9F0D]">Food</span>tuck</h2> 
   </div> 
      {/* Sheet for medium and smaller screens  */}
     <div className="lg:hidden">
        <Sheet>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet for Small and Medium Screens</SheetTitle>
            </SheetHeader>
             Other content 
          </SheetContent> 
         </Sheet> 
      </div> 

      {/* Navbar for large screens */}
  <div className="hidden lg:block">
        <nav className=" text-white p-4">
  <div>
        <ul className='flex mt-10 gap-8 ml-10 '>
      <li className='font-inter  hover:text-[#FF9F0D] hover:underline'>
        <Link href="/" className='hover:text:[#FF9F0D]'>Home</Link>
     
      </li>
      <li className='font-inter  hover:underline'><Link href="/menu" className='hover:text-[#FF9F0D]'>Menu</Link></li>
      <li className='font-inter hover:underline'><Link href="/blog" className='hover:text-[#FF9F0D]'>Blog</Link></li>
      <li className='font-inter hover:underline'><Link href="/pages"className='hover:text-[#FF9F0D]' >Pages</Link></li>
      <span><li className='flex font-inter hover:underline'><Link href="/about"className='hover:text-[#FF9F0D]'>About</Link></li> </span>
      <li className='font-inter hover:underline'><Link href="/shop"className='hover:text-[#FF9F0D]'>Shop</Link></li>
      <li className='font-inter hover:underline'><Link href="/contact"className='hover:text-[#FF9F0D]'>Contact</Link></li>
    </ul>
 </div>

     {/* Input Section */}
    <div className=' hidden lg:flex ml-[700px] mt-[-50px]'>
<button className=" w-[310px] h-[50px]  flex justify-center items-center border-[1px]   gap-[10px] rounded-[27px]">
          <input
            type="text"
            placeholder="Search..."
            className=" text[12px] font-[inter] font-normal opacity-[50%] text-[black] bg-black "
          />
          <CiSearch 
   className="w-[30px] h-[30px] " />
        </button>
 
     {/* Cart  */}
     <Link href="/cart">
     <div className=  'text-white mt-3'> <IoCartOutline className='w-[50px] h-[30px] hover:text-[#FF9F0D]'/> 
        </div>  
        </Link>
      {/* Wishlist */}
      <Link href="/wishlist">
      <div className='text-white mt-3'>
        <FaRegHeart className='w-[25px] h-[30px] hover:text-[#FF9F0D]'/>
      </div>
     </Link>
     </div> 

     
    
        </nav>
      </div>
    </div>
  );
}
   
  
 

       
      







