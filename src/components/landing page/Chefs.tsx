import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Chefs = () => {
  return (
    <>
    <div  className='w-full max-w-[1184px]  md:w-[750px] lg:w-[1184px] lg:h-[600px] h-[1750px] bg-[black]'>

<div className=' flex flex-col justify-center items-center'>
 <h3 className=' text-[#FF9F0D]  font-[400]  text-[32px]  font-Great_Vibes  '>Chefs</h3>
<h1 className='  mb-9 text-[white] font-[700] text-[48px] font-inter'><span className='text-[#FF9F0D]'>Me</span>et Our Chef</h1> 
</div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-[20px]  ' >
        <div className='flex justify-center items-center'>
            <Image src="/images/card1.png" alt="Card1" width={270} height={391} className='mt-[10px]  rounded-[6px]'/>
        </div>
        <div className='flex justify-center items-center' >
        <Image src="/images/card2.png" alt="Card2" width={270} height={391} className=' mt-[10px] rounded-[6px]'/>
        </div>
        <div className='flex justify-center items-center'>
        <Image src="/images/card3.png" alt="Card3" width={270} height={391} className=' mt-[10px] rounded-[6px]'/>
        </div>
        <div className='flex justify-center items-center'> 
        <Image src="/images/card4.png" alt="Card4" width={270} height={391} className=' mt-[10px] rounded-[6px]'/>
        </div>
      
</div>
  <div className='mt-[30px] flex justify-center items-center'>
  <Link href="/chefs">
  <button  className=' w-[155px] h-[50px] text-[white] border-[#FF9F0D] border-[1px] text-center font-inter rounded-[25px] transition-transform duration-300 ease-out hover:scale-90'>See More</button>
  </Link>
  </div>
 
    </div>
    
    </>
  )
}

export default Chefs