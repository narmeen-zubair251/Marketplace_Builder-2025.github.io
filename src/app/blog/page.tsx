import Image from 'next/image'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaFacebook, FaFacebookF, FaPinterest, FaYoutube } from 'react-icons/fa6'
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const Blog = () => {
  return (
    
  // Top Heading Section
<div className='w-full max-w-[1184px] h-[3450px]'>
<div className=' h-[410px] ' 
style={{backgroundImage:"url('/images/unsplash_4ycv3Ky1ZZU.png')"}}>
       <h1 className='text-[white] font-[700]  font-inter text-[48px] flex  pt-[100px] justify-center items-center'>Blog List</h1>
       <p className='text-[white] font-inter font-normal text-[20px] flex justify-center'>Home /<span className='text-[#FF9F0D]'>Blog</span></p>
</div>
     {/* Section 01 */}
   <div className=' h-[830px] ml-[100px] mt-[80px]'>
<Image src="/images/blog1.png " alt="blog1 " width={571} height={220} />
<Image src="/images/Calendar.png " alt="calender " width={23} height={24} className='mt-[10px]'/>
<Image src="/images/Admin.png " alt="admin " width={267} height={24} className='ml-[25px] mt-[-20px] '/> 
<h1 className=' w-[600px] font-Helvetica font-[700] text-[24px] text-[#333333] mt-[10px] my-4 border-b [border: 1px solid #E0E0E0] '>10 Reasons To Do A Digital Detox Challenge </h1>
  <p className='w-[600px]  font-inter font-normal text-[16px] text-[#4F4F4F] mb-3'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat </p> 
  <button className='px-8 py-3 text-[#FF9F0D] border-[#FF9F0D] border-[1px] text-center font-inter rounded-[6px]  '>Read More</button>
  <div>
   
    {/* Section 02 */}
  <div className=' h-[640px] mt-[50px]'>
     <Image src="/images/pizza.png " alt="pizza " width={571} height={220} />
     <Image src="/images/Calendar.png " alt="calender " width={23} height={24} className='mt-[10px]'/>
     <Image src="/images/Admin.png " alt="admin " width={267} height={24} className='ml-[25px] mt-[-20px] '/> 
  <h1 className='w-[600px] font-Helvetica font-[700] text-[24px] text-     [#333333] mt-[10px] my-4 border-b [border: 1px solid #E0E0E0] '>Traditional Soft Pretzels with Sweet Beer Cheese </h1>
         <p className='w-[600px]  font-inter font-normal text-[16px] text-[#4F4F4F] mb-3'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat </p> 
      <button className='px-8 py-3 text-[#FF9F0D] border-[#FF9F0D] border-[1px] text-center font-inter rounded-[6px]  '>Read More</button>
</div>
     {/* Section 03 */}
<div className=' h-[640px] mt-[50px]'>
     <Image src="/images/sec2.png " alt="sec2" width={571} height={220} />
     <Image src="/images/Calendar.png " alt="calender " width={23} height={24} className='mt-[10px]'/>
     <Image src="/images/Admin.png " alt="admin " width={267} height={24} className='ml-[25px] mt-[-20px] '/> 
  <h1 className='w-[600px] font-Helvetica font-[700] text-[24px] text-     [#333333] mt-[10px] my-4 border-b [border: 1px solid #E0E0E0] '>The Ultimate Hangover Burger: Egg in a Hole Burger </h1>
         <p className='w-[600px]  font-inter font-normal text-[16px] text-[#4F4F4F] mb-3'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat </p> 
      <button className=' px-8 py-3 text-[#FF9F0D] border-[#FF9F0D] border-[1px] text-center font-inter rounded-[6px]  '>Read More</button>
</div> 
   {/* Section 04 */}
   <div className=' h-[830px] mt-[50px]'>
     <Image src="/images/sec3.png " alt="sec3" width={571} height={220} />
     <Image src="/images/Calendar.png " alt="calender " width={23} height={24} className='mt-[10px]'/>
     <Image src="/images/Admin.png " alt="admin " width={267} height={24} className='ml-[25px] mt-[-20px] '/> 
  <h1 className='w-[600px] h-[45px] font-Helvetica font-[700] text-[24px] text-     [#333333] mt-[10px] my-4 border-b [border: 1px solid #E0E0E0] '>The Ultimate Hangover Burger: Egg in a Hole Burger </h1>
         <p className='w-[600px] font-inter font-normal text-[16px] text-[#4F4F4F] mb-3'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat </p> 
      <button className=' px-8 py-3 text-[#FF9F0D] border-[#FF9F0D] border-[1px] text-center font-inter rounded-[6px]  '>Read More</button>
</div> 
 </div>
  </div>
 
 
    {/* Side Section */}

<div  className='w-[430px] h-[1300px] ml-[720px] mt-[-820px] '>
     <button className=" w-[421px] h-[70px] flex border-[1px] border-[border: 1px solid #E0E0E0] pl-[27px]  pt-[15px] gap-[20px]">
              <input
                type="text"
                placeholder="Search Your Keyword.."
               className=' w-[300px] font-inter font-normal text-[18px] mt-[10px]'
              />
             <div className='w-[100px]  h-[70px] bg-[#FF9F0D]  mt-[-16px]'>  
                <CiSearch className="w-[24px] h-[24px] text-[white] ml-[30px] mt-[25px]"  /> 
             </div>
             
    </button> 
 <div className='w-[423px] h-[435px] mt-[30px] '>
          <Image src="/images/sideimage.png" alt="side image" width={423} height={424} />  
            
 </div>   
  {/* Recent Post */}
<div className='w-[423px] h-[592px]  border-[1px] border-[border: 1px solid #E0E0E0]'>
   <div className='w-[321px] h-[592px] ml-[35px]'>
      <h1 className='w-[116px] h-[28px] font-Helvetica font-[700] text-[20px] mt-[30px]'> Recent Post </h1>
   {/* Image 01 */}
<div className='w-[323px] h-[107px] mt-[25px] flex gap-[13px] border-b [border: 1px solid #E0E0E0] '>
  
  <div>
     <Image src="/images/recentpost1.png" alt="image1" width={99} height={91}/>
  </div>
  <div>
 <p className='w-[89px] h-[21px] font-Helvetica font-normal text-[14px] text-[#828282]'>June 22, 2020 </p>
  <p className='w-[205px] h-[47px] font-Helvetica font-normal text-[16px] text-[#828282]'> Lorem ipsum dolor sit cing elit, sed do.</p>
     </div> 
</div>

   {/* Image 02 */}

  <div className='w-[323px] h-[107px] mt-[25px] flex gap-[13px] border-b [border: 1px solid #E0E0E0] '>
  
  <div>
     <Image src="/images/recentpost2.png" alt="image2" width={99} height={91}/>
  </div>
  <div>
 <p className='w-[89px] h-[21px] font-Helvetica font-normal text-[14px] text-[#828282]'>June 22, 2020 </p>
  <p className='w-[205px] h-[47px] font-Helvetica font-normal text-[16px] text-[#828282]'> Lorem ipsum dolor sit cing elit, sed do.</p>
     </div> 
      </div>

     {/* Image 03 */}
     <div className='w-[323px] h-[107px] mt-[25px] flex gap-[13px] border-b [border: 1px solid #E0E0E0] '>
  
  <div>
     <Image src="/images/recentpost3.png" alt="image3" width={99} height={91}/>
  </div>
  <div>
 <p className='w-[89px] h-[21px] font-Helvetica font-normal text-[14px] text-[#828282]'>June 22, 2020 </p>
  <p className='w-[205px] h-[47px] font-Helvetica font-normal text-[16px] text-[#828282]'> Lorem ipsum dolor sit cing elit, sed do.</p>
     </div> 
      </div>

      {/* Image 04 */}

  <div className='w-[323px] h-[100px] mt-[25px] flex gap-[13px] border-b [border: 1px solid #E0E0E0] '>
  
  <div>
     <Image src="/images/recentpost4.png" alt="image4" width={99} height={91}/>
  </div>
  <div>
 <p className='w-[89px] h-[21px] font-Helvetica font-normal text-[14px] text-[#828282]'>June 22, 2020 </p>
  <p className='w-[205px] h-[47px] font-Helvetica font-normal text-[16px] text-[#828282]'> Lorem ipsum dolor sit cing elit, sed do.</p>
     </div> 
      </div>
      </div>


</div>

   {/* Filter By Menu */}
   <div className='w-[423px] h-[480px] mt-[30px] border [border: 1px solid #E0E0E0]'>
   <div className=''>
      <h1 className=' w-[140px] h-[28px] ml-[30px] mt-[30px] font-inter font-[700] text-[20px] text-[#333333]'>
      Filter By Menu
      </h1>
   </div>
     {/* Image 01 */}
   <div className='w-[311px] h-[62px] ml-[30px] mt-[28px] '>
      <Image src="/images/menu1.png" alt="menu1" width={67} height={62} />
   </div>
 <div className='w-[220px] h-[24px] ml-[120px] flex mt-[-40px]'>
      <h1 className='w-[190px] h-[24px] font-Helvetica font-[700] text-[16px]  text-[#333333]'> Chicken Fry</h1> 
      <p className='w-[18px] h-[24px] font-Helvetica  font-normal text-[16px] text-[#333333]'>26</p>
 </div>     
       
       
       {/* Image 02 */}
 
 <div className='w-[311px] h-[62px] ml-[30px] mt-[28px] '>
      <Image src="/images/menu2.png" alt="menu2" width={67} height={62} />
   </div>
 <div className='w-[220px] h-[24px] ml-[120px] flex mt-[-40px]'>
      <h1 className='w-[190px] h-[24px] font-Helvetica font-[700] text-[16px]  text-[#333333]'> Burger Food</h1> 
      <p className='w-[18px] h-[24px] font-Helvetica  font-normal text-[16px] text-[#333333]'>46</p>
       
 </div>

     {/* Image 03 */}

   <div className='w-[311px] h-[62px] ml-[30px] mt-[28px] '>
      <Image src="/images/menu3.png" alt="menu3" width={67} height={62} />
   </div>
 <div className='w-[220px] h-[24px] ml-[120px] flex mt-[-40px]'>
      <h1 className='w-[190px] h-[24px] font-Helvetica font-[700] text-[16px]  text-[#333333]'> Pizza</h1> 
      <p className='w-[18px] h-[24px] font-Helvetica  font-normal text-[16px] text-[#333333]'>16</p>
       
 </div>

     {/* Image 04 */}
  
   <div className='w-[311px] h-[62px] ml-[30px] mt-[28px] '>
      <Image src="/images/menu4.png" alt="menu4" width={67} height={62} />
   </div>
 <div className='w-[220px] h-[24px] ml-[120px] flex mt-[-40px]'>
      <h1 className='w-[190px] h-[24px] font-Helvetica font-[700] text-[16px]  text-[#333333]'>Fresh Fruits</h1> 
      <p className='w-[18px] h-[24px] font-Helvetica  font-normal text-[16px] text-[#333333]'>36</p>
       
 </div>
  
  {/* Image 05 */}

  <div className='w-[311px] h-[62px] ml-[30px] mt-[28px] '>
      <Image src="/images/menu5.png" alt="menu5" width={67} height={62} />
   </div>
 <div className='w-[220px] h-[24px] ml-[120px] flex mt-[-40px]'>
      <h1 className='w-[190px] h-[24px] font-Helvetica font-[700] text-[16px]  text-[#333333]'>Vegetables</h1> 
      <p className='w-[18px] h-[24px] font-Helvetica  font-normal text-[16px] text-[#333333]'>16</p>
       
 </div>
   </div>

   
   {/* Popular Tags */}
   <div className='w-[423px] h-[308px] mt-8 border [border: 1px solid #E0E0E0]'>
   <h1 className='w-[126px] h-[28px] mt-7 ml-8 font-Helvetica font-[700] text-[20px] text-[#333333]'>Popular Tags</h1>
<div className='flex'>
   <div className='w-[115px] h-[38px] border [border: 1px solid #E0E0E0] ml-8 mt-4 flex justify-center items-center font-Helvetica font-normal text-[14px] text-[#4F4F4F] '>Sandwich</div>
   <div className='w-[87px] h-[38px] border [border: 1px solid #E0E0E0] ml-5 mt-4 flex justify-center items-center font-Helvetica font-normal text-[14px] text-[#4F4F4F] '>Tikka</div>
   <div className='w-[79px] h-[38px] border [border: 1px solid #E0E0E0] ml-5 mt-4 flex justify-center items-center font-Helvetica font-normal text-[14px] text-[#4F4F4F] '>Bbq</div>
</div>
  
<div className='flex'>
   <div className='w-[126px] h-[38px] border [border: 1px solid #E0E0E0] ml-8 mt-4 flex justify-center items-center font-Helvetica font-normal text-[14px] text-[#4F4F4F] '>Resturant</div>
   <div className='w-[158px] h-[38px] border [border: 1px solid #E0E0E0] ml-5 mt-4 flex justify-center items-center font-Helvetica font-normal text-[14px] text-[#4F4F4F] '>Chicken Sharma</div>
</div>

<div className='flex'>
   <div className='w-[95px] h-[38px] border [border: 1px solid #E0E0E0] ml-8 mt-4 flex justify-center items-center font-Helvetica font-normal text-[14px] text-[#4F4F4F] '>Health</div>
   <div className='w-[109px] h-[38px] border [border: 1px solid #E0E0E0] ml-5 mt-4 flex justify-center items-center font-Helvetica font-normal text-[14px] text-[#4F4F4F] '>fastfood</div>
   <div className='w-[88px] h-[38px] border [border: 1px solid #E0E0E0] ml-5 mt-4 flex justify-center items-center font-Helvetica font-normal text-[14px] text-[#4F4F4F] '>Food</div>
</div>

<div className='flex'>
   <div className='w-[89px] h-[38px] border [border: 1px solid #E0E0E0] ml-8 mt-4 flex justify-center items-center font-Helvetica font-normal text-[14px] text-[#4F4F4F] '>Pizza</div>
   <div className='w-[97px] h-[38px] border [border: 1px solid #E0E0E0] ml-5 mt-4 flex justify-center items-center font-Helvetica font-normal text-[14px] text-[#4F4F4F] '>Burger</div>
   <div className='w-[105px] h-[38px] border [border: 1px solid #E0E0E0] ml-5 mt-4 flex justify-center items-center font-Helvetica font-normal text-[14px] text-[#4F4F4F] '>Chicken</div>
</div>
       </div>


{/* Photo Gallery */}
 <div className='w-[422px] h-[316px] mt-8 border [border: 1px solid #E0E0E0]'> 
   <h1 className='w-[131px] h-[28px] mt-8 ml-8 font-Helvetica font-[700] text-[20px] text-[#333333]'>Photo Gallery</h1>
<div className='flex gap-6 ml-8 mt-3'>
      <Image src="/images/gallery1.png" alt="gallery1" width={110} height={92}/>
      <Image src="/images/sec2.png" alt="gallery2" width={110} height={92}/>
      <Image src="/images/gallery3.png" alt="gallery3" width={110} height={92}/>
</div>

<div className='flex gap-6 ml-8 mt-6'>
      <Image src="/images/gallery4.png" alt="gallery4" width={110} height={92}/>
      <Image src="/images/gallery5.png" alt="gallery5" width={110} height={92}/>
      <Image src="/images/gallery6.png" alt="gallery6" width={110} height={92}/>
</div>
   </div>

   {/* Follow Us */}
   <div className='w-[422px] h-[148px] mt-8 border [border: 1px solid #E0E0E0]'>
  <h1 className='w-[109px] h-[28px] mt-8 ml-10 font-Helvetica font-[700] text-[20px] text-[#333333]'>Follow Us</h1>
  <div className='w-[308px] h-[46px] ml-10 mt-3 flex gap-4'>
  <div className='w-[52px] h-[46px] bg-[#f5f1f1] text-black flex justify-center items-center'><IoLogoTwitter/> </div>
  <div  className='w-[52px] h-[46px] bg-[#f5f1f1] text-black flex justify-center items-center' ><FaYoutube/> </div>
  <div className='w-[52px] h-[46px] bg-[#FF9F0D] text-[white] flex justify-center items-center'  ><FaPinterest/> </div>
  <div className='w-[52px] h-[46px] bg-[#f5f1f1]  text-black flex justify-center items-center'  ><IoLogoInstagram/> </div>
  <div className='w-[52px] h-[46px] bg-[#f5f1f1]  text-black flex justify-center items-center ' ><FaFacebookF/> </div>
 </div>
     </div>
</div>
    <div className='w-[306px] h-[51px] ml-[400px] mt-[1450px] flex gap-5'>
      <div className='w-[50px] h-[50px] border [border:1px solid #E0E0E0] text-[#FF9F0D] flex justify-center items-center font-[900] text-[15px]'><MdOutlineKeyboardDoubleArrowLeft /> </div>
      <div  className='w-[50px] h-[50px] border [border:1px solid #E0E0E0] text-[#FF9F0D] flex justify-center items-center font-inter font-normal text-[16px]'>1</div>
      <div  className='w-[50px] h-[50px] border [border:1px solid #E0E0E0] text-[white] bg-[#FF9F0D] flex justify-center items-center font-inter font-normal text-[16px]'>2</div>
      <div  className='w-[50px] h-[50px] border [border:1px solid #E0E0E0] text-[#FF9F0D] flex justify-center items-center font-inter font-normal text-[16px]'>3</div>
      <div  className='w-[50px] h-[50px] border [border:1px solid #E0E0E0] text-[#FF9F0D] flex justify-center items-center font-[900] text-[15px]'><MdOutlineKeyboardDoubleArrowRight/> </div>
      </div>   
       
       
       
       
       </div>
   
  )
}

export default Blog ;

