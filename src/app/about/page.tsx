import { url } from 'inspector'
import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
  
      // Top Heading Section
  <div className='w-full max-w-[1184px] h-[5800px] lg:h-[4300px]'>
<div className=' h-[410px] ' style={{backgroundImage:"url('/images/unsplash_4ycv3Ky1ZZU.png')"}}>
       <h1 className='text-[white] font-[700]  font-inter text-[48px] flex  pt-[100px] justify-center items-center'> About Us</h1>
       <p className='text-[white] font-inter font-normal text-[20px] flex justify-center'>Home /<span className='text-[#FF9F0D]'>About</span></p>
</div>
   
  {/* Section 1 */}
  <div className="h-auto px-4 md:px-8 lg:px-16 py-10 flex flex-col lg:flex-row">
  {/* Image Section */}
  <div className="flex flex-wrap lg:flex-nowrap gap-5 justify-center items-center">
    <Image 
      src="/images/about1.png" 
      alt="aboutimg1"  
      width={300} 
      height={200} 
      className="rounded-[6px] w-[250px] sm:w-[280px] lg:w-[300px] object-cover"
    />
    
    <div className="flex flex-col items-center">
      <Image 
        src="/images/wing.png" 
        alt="aboutimg2"  
        width={250} 
        height={271} 
        className="rounded-[6px] mt-5 sm:w-[200px] md:w-[230px] lg:w-[250px] object-cover"
      />
      <Image 
        src="/images/about3.png" 
        alt="aboutimg3"  
        width={250} 
        height={271} 
        className="rounded-[6px] mt-5 sm:w-[200px] md:w-[230px] lg:w-[250px] object-cover"
      />
    </div>
  </div>

  {/* Content Section */}
  <div className="text-center lg:text-left mt-10 lg:ml-[50px] xl:ml-[150px]">
    <h2 className="text-[#FF9F0D] text-lg sm:text-xl md:text-2xl font-Miniver">About Us</h2>
    <h1 className="text-black font-Helvetica font-[700] text-[28px] sm:text-[48px]  md:text-4xl xl:text-5xl mb-3">
      Food is an important part of a balanced Diet
    </h1>
    <p className="max-w-lg mx-auto lg:mx-0 text-black text-sm sm:text-base md:text-lg font-normal">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
    </p>

    {/* Button Section */}
    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-5">
      <button className="px-6 py-3 bg-[#FF9F0D] font-inter font-bold text-[16px] sm:text-[18px] rounded-md transition hover:bg-[#e68f0b]">
        Show More
      </button>
      
      <div className="flex items-center gap-3">
        <Image 
          src="/images/playbutton.png" 
          alt="play button" 
          width={60} 
          height={60} 
          className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px]"
        />
        <p className="text-black font-inter font-bold text-sm sm:text-base">Watch Video</p>
      </div>
    </div>
  </div>
</div>

  {/* Section 2 */}
 <div className=' h-[865px] '>
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-Helvetica font-[700] text-[28px] sm:text-[48px] text-black '>Why Choose us </h1>
<p className=' w-[579px] font-Helvetica font-normal text-[16px] text-center'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. 
</p>  
</div>

<div className='px-[30px] mt-[50px]'>
    <Image src="/images/aboutfull.png" alt="aboutfull" layout='responsive'  width={1296} height={386} />
</div>
 
 {/* Section 3 */}
<div className=' h-auto flex flex-col lg:flex-row justify-center items-center mb-7 '>
 <div  className='w-[359px] h-[225px] flex flex-col items-center'>
   <Image src="/images/Student.png" alt="student"   width={80} height={80} className=' mb-4 mt-[70px]'/>
   <h1 className=' h-[29px]  font-Helvetica text-[#333333] font-[700] mb-4 text-[24px]'>Best Chef</h1>
<p className='w-[319px]  font-Helvetica font-normal text-[16px] text-[#333333] text-center'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>

</div>
   

<div className='w-[359px] h-[225px] flex flex-col items-center '>
    <Image src="/images/Coffee.png" alt="coffee"   width={80} height={80} className=' mb-4 mt-[70px]'/>
    <h1 className=' h-[29px] font-Helvetica text-[#333333] font-[700] mb-4 text-[24px]'>120 Item food</h1>
    <p className='w-[319px] h-[46px] font-Helvetica font-normal text-[16px] text-[#333333] text-center'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
   <p className='w-[359px]  font-Helvetica font-normal text-[16px] text-[#333333]  '> </p> 
</div>

<div className='w-[359px] h-[225px] flex flex-col items-center'>
    <Image src="/images/Person.png" alt="person"   width={80} height={80} className=' mb-4 mt-[70px]'/>
    <h1 className='w-[235px] h-[29px]  font-Helvetica text-[#333333] font-[700] mb-4 text-[24px]'>Clean Environment</h1>
    <p className='w-[319px] h-[46px] font-Helvetica font-normal text-[16px] text-[#333333] text-center'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
   <p className='w-[200px]  font-Helvetica font-normal text-[16px] text-[#333333]  '> </p> 
</div> 
 </div>
 
     {/*Section 4  */}
 <div className=' w-full px-7 pt-[50px]'>
    <Image src="/images/Team Member.png" alt="team member" layout='responsive' width={100} height={100} />
</div>

     {/* Section 5 */}
     <div className='w-full max-w-[1184px] mx-auto  px-4 py-8'>
 <div className="text-center md:text-left md:ml-24">
        <h3 className="font-Great_Vibes text-[24px] sm:text-[32px] text-[#FF9F0D]">
          Testimonials
        </h3>
        <h1 className="font-Helvetica font-[700] text-[28px] sm:text-[48px] ">
          What our clients are saying
        </h1>
      </div>

      {/* Client Testimonial */}
      <div className="flex justify-center mt-8 md:mt-12">
        <div className="w-full max-w-[668px] bg-white rounded-lg shadow-lg p-6">
          <div className="relative -top-10 flex justify-center">
            <Image
              src="/images/Text2.png"
              alt="Client testimonial"
              width={659}
              height={351}
            />
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        <div className="w-[15px] h-[15px] bg-[#FF9F0D] rounded-full"></div>
        <div className="w-[15px] h-[15px] bg-[#FF9F0D4D] rounded-full"></div>
        <div className="w-[15px] h-[15px] bg-[#FF9F0D4D] rounded-full"></div>
        <div className="w-[15px] h-[15px] bg-[#FF9F0D4D] rounded-full"></div>
      </div>
     </div>
         {/* Our Food Menu */}
         <div className='min-h-screen px-4 py-10'>
         <div className='flex flex-col items-center mt-[90px]'> 
        <h1 className='  font-Helvetica font-[700] text-[28px] sm:text-[48px] text-[#333333] mb-2'>Our Food Menu</h1>
        <p className='max-w-md text-sm sm:text-base text-[#4F4F4F] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Varius sed pharetra dictum neque massa congue</p>
        
        <div className=' flex flex-wrap justify-center items-center gap-8 mt-8 mb-6'>
        
        <p className='  font-inter font-[400] text-[16px] sm:text-[20px] cursor-pointer text-[#FF9F0D] '>Breakfast</p>
        
        <p className='   font-inter font-[400] text-[16px] sm:text-[20px] cursor-pointer text-[#4F4F4F]'>Lunch</p>
        
        <p className='   font-inter font-[400] text-[16px] sm:text-[20px] cursor-pointer text-[#4F4F4F]'>Dinner</p>
        
        <p className='   font-inter font-[400] text-[16px] sm:text-[20px] cursor-pointer text-[#4F4F4F]'>Dessert</p>
        
        <p className='  font-inter font-[400] text-[16px] sm:text-[20px] cursor-pointer text-[#4F4F4F]'>Drink</p>
        
        <p className='  font-inter font-[400] text-[16px] sm:text-[20px] cursor-pointer text-[#4F4F4F]'>Snack</p>
        </div>
         </div>
         
         
         {/* Items Section */}
         <div className="ml-[60px] mt-8 border-t border-gray-300">
  <div className="my-4 flex flex-col lg:flex-row justify-between gap-6 border-b border-[#E0E0E0] pb-6">
    {/* Left Column (First 4 Items) */}
    <div className="w-full lg:w-1/2">
      <div className="py-6 border-b border-[#E0E0E0]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="font-Helvetica font-bold text-xl text-[#333333] mb-2 lg:mb-0">
            Alder Grilled Chinook Salmon
          </h1>
          <p className="font-Helvetica font-bold text-xl text-[#FF9F0D] mt-2 lg:mt-0">
            $32
          </p>
        </div>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">
          Toasted French bread topped with romano, cheddar
        </p>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">560 CAL</p>
      </div>

      <div className="py-6 border-b border-[#E0E0E0]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="font-Helvetica font-bold text-xl text-[#333333] mb-2 lg:mb-0">
            Alder Grilled Chinook Salmon
          </h1>
          <p className="font-Helvetica font-bold text-xl text-[#FF9F0D] mt-2 lg:mt-0">
            $32
          </p>
        </div>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">
          Gorgonzola, ricotta, mozzarella, taleggio
        </p>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">700 CAL</p>
      </div>

      <div className="py-6 border-b border-[#E0E0E0]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="font-Helvetica font-bold text-xl text-[#333333] mb-2 lg:mb-0">
            Alder Grilled Chinook Salmon
          </h1>
          <p className="font-Helvetica font-bold text-xl text-[#FF9F0D] mt-2 lg:mt-0">
            $32
          </p>
        </div>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">
          Ground cumin, avocados, peeled and cubed
        </p>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">1000 CAL</p>
      </div>

      <div className="py-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="font-Helvetica font-bold text-xl text-[#333333] mb-2 lg:mb-0">
            Alder Grilled Chinook Salmon
          </h1>
          <p className="font-Helvetica font-bold text-xl text-[#FF9F0D] mt-2 lg:mt-0">
            $32
          </p>
        </div>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">
          Spreadable cream cheese, crumbled blue cheese
        </p>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">560 CAL</p>
      </div>
    </div>

    {/* Right Column (Next 4 Items) */}
    <div className="w-full lg:w-1/2">
      <div className="py-6 border-b border-[#E0E0E0]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="font-Helvetica font-bold text-xl text-[#333333] mb-2 lg:mb-0">
            Alder Grilled Chinook Salmon
          </h1>
          <p className="font-Helvetica font-bold text-xl text-[#FF9F0D] mt-2 lg:mt-0">
            $32
          </p>
        </div>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">
          Toasted French bread topped with romano, cheddar
        </p>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">560 CAL</p>
      </div>

      <div className="py-6 border-b border-[#E0E0E0]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="font-Helvetica font-bold text-xl text-[#333333] mb-2 lg:mb-0">
            Alder Grilled Chinook Salmon
          </h1>
          <p className="font-Helvetica font-bold text-xl text-[#FF9F0D] mt-2 lg:mt-0">
            $32
          </p>
        </div>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">
          Gorgonzola, ricotta, mozzarella, taleggio
        </p>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">700 CAL</p>
      </div>

      <div className="py-6 border-b border-[#E0E0E0]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="font-Helvetica font-bold text-xl text-[#333333] mb-2 lg:mb-0">
            Alder Grilled Chinook Salmon
          </h1>
          <p className="font-Helvetica font-bold text-xl text-[#FF9F0D] mt-2 lg:mt-0">
            $32
          </p>
        </div>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">
          Ground cumin, avocados, peeled and cubed
        </p>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">1000 CAL</p>
      </div>

      <div className="py-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="font-Helvetica font-bold text-xl text-[#333333] mb-2 lg:mb-0">
            Alder Grilled Chinook Salmon
          </h1>
          <p className="font-Helvetica font-bold text-xl text-[#FF9F0D] mt-2 lg:mt-0">
            $32
          </p>
        </div>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">
          Spreadable cream cheese, crumbled blue cheese
        </p>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-2">560 CAL</p>
      </div>
    </div>
  </div>

  {/* View Menu Button */}
  <div className="flex justify-center mt-16">
    <button className="px-6 py-3 border border-[#FF9F0D] text-[#FF9F0D] font-medium text-sm sm:text-base rounded-md">
      View Menu
    </button>
  </div>
</div>

          </div>  
    </div>
    </div>
     
             );
           }

           export default About ;