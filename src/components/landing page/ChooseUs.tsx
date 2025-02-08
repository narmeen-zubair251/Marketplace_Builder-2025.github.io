 import React from 'react' 
 import Image from 'next/image'

 const ChooseUs = () => {
   return (
     <div className='w-full max-w-[1184px] lg:h-[1300px] h-[1500px]  bg-black' >
     <div className='grid grid-cols-1 lg:grid-cols-2'>
{/* Images Section */}
  
      <div className='max-w-[550px]  w-full lg:ml-[60px] h-[500px] text-center sm:px-6'>
         <div className='flex gap-4 '>
          <Image src="/images/choose1.png " alt="image1 " width={262} height={356} className=' rounded-6'/>  
          <Image src="/images/choose2.png " alt="image2 " width={200} height={231} className='mt-[75px] rounded-6'/>  
      </div>
       
      <div className='flex gap-4  mt-4'>
         <Image src="/images/choose3.png " alt="image3 " width={200} height={306} className=' rounded-6'/>  
         <Image src="/images/choose4.png " alt="image4 " width={221} height={226} className=' mb-28 rounded-6'/>  
      <div>
        <Image src="/images/choose5.png " alt="image5 " width={141} height={168} className=' rounded-6'/>  
        <Image src="/images/choose6.png " alt="image6 " width={141} height={166} className=' mt-4 rounded-6'/>  

      </div>
         </div>
      </div>
     

       {/* Content Section */}
      
<div className='h-[750px]  ml-8  max-w-[550px]  w-full mt-20 lg:mt-0'>
           <h3>
             <span className=' text-[#FF9F0D] font-[400]  text-[32px] ml-5  font-Great_Vibes '>Why Choose us</span>
           </h3>
           <h1 className='  w-auto   text-[white]  font-[700] text-[60px] font-inter'><span className='text-[#FF9F0D]'>Ex</span>ta ordinary taste And Experienced </h1>
              <p className='w-[536px] h-[110px]  font-inter font-[400]   text-[16px]  text-[white] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
             </p>
       <div className='w-[600px] h-[50px] '>
<div className='flex gap-6 '>

<div className='w-[102px] h-[100px]  bg-[#FF9F0D]   rounded-[6px] flex justify-center items-center'>
   
   <Image src="/images/Hamburger.png" alt="burger" width={56} height={56}/>
 
 </div>
 
<div className='w-[102px] h-[100px] bg-[#FF9F0D]   gap-[2px]  rounded-[6px] flex justify-center items-center'>
  
  <Image src="/images/Cookie.png" alt="cookie" width={56} height={56}/>
   
</div>

<div className='w-[102px] h-[100px] bg-[#FF9F0D]   rounded-[6px] flex justify-center items-center' >
   
   <Image src="/images/Wine.png" alt="wine" width={56} height={56}/>

</div> 
   </div>

 <div className='flex gap-[5px] '>
   <p className='w-[85px] h-[26px] font-inter font-normal ml-3 text-[18px] text-[white]'>Fast Food</p>
   <p className='w-[85px] h-[26px] font-inter font-normal pl-[50px] text-[18px] text-[white]'>Lunch</p>
   <p className='w-[85px] h-[26px] font-inter font-normal pl-[75px] text-[18px] text-[white]'>Dinner</p>
 </div>

<div className=''>
 
  <Image src="/images/experience.png" alt="experience" width={374} height={83}  className='  mt-[25px]'/>

</div>
     </div>
         </div>   
              </div> 
 
      
     {/* Clients */}     
     <div>
     <Image src="/images/Clients.png" alt="clients" width={1200} height={439} />
     </div>   
    
    
    
 </div>
   )
 }

 export default ChooseUs

