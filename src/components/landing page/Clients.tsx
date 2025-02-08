import Image from 'next/image'
import React from 'react'

// const Clients = () => {
//   return (
//     <div className='w-[1184px] h-[1300px] bg-black'>
//         <div className='ml-24'>
//      <h3 className='font-Great_Vibes font-normal text-[32px] text-[#FF9F0D]'>Testimonials</h3>       
//       <h1 className='font-Helvetica font-[700] text-[48px] text-white'>What our client are saying</h1>  
//         </div>
        
//         {/* Clients */}
           
//      <div className='w-[668px] h-[400px] bg-white ml-[300px] mt-[100px]'>
//         <div className='relative -top-20  flex justify-center'>
//   <Image src="/images/Text2.png " alt="text " width={659} height={351}/>
//      </div> 
//      </div> 

//      <div className='w-[86px] h-[16px] mt-[60px] ml-[580px] flex gap-2'>
//      <div className='w-[15px] h-[16px] bg-[#FF9F0D] rounded-full'></div>
//      <div  className='w-[15px] h-[16px] bg-[#FF9F0D4D] rounded-full'> </div>
//      <div  className='w-[15px] h-[16px] bg-[#FF9F0D4D] rounded-full'></div>
//      <div  className='w-[15px] h-[16px] bg-[#FF9F0D4D] rounded-full' > </div>
//      </div>
   
//    <div className='w-[1184px] h-[347px] border-[1px] mt-[120px] '>
//     <Image src="/images/bannerimage.png" alt="banner" width={1316} height={558}/>
//    </div>




// </div>
//   )
// }

// export default Clients



const Clients = () => {
  return (
    <div className="w-full max-w-[1184px] mx-auto bg-black px-4 py-8">
      {/* Header Section */}
      <div className="text-center md:text-left md:ml-24">
        <h3 className="font-Great_Vibes text-[24px] sm:text-[32px] text-[#FF9F0D]">
          Testimonials
        </h3>
        <h1 className="font-Helvetica font-[700] text-[28px] sm:text-[48px] text-white">
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

      {/* Banner Section */}
      <div className="mt-12">
        <div className="w-full border border-gray-200">
          <Image
            src="/images/bannerimage.png"
            alt="Banner"
            width={1316}
            height={558}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
