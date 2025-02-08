import React from 'react'
import Image from 'next/image'
const Menu = () => {
  return (
    
    // Top Heading Section
<div className='w-full max-w-[1184px] lg:h-[3900px] h-auto'>
<div className=' h-[410px] ' 
style={{backgroundImage:"url('/images/unsplash_4ycv3Ky1ZZU.png')"}}>
       <h1 className='text-[white] font-[700]  font-inter text-[48px] flex  pt-[100px] justify-center items-center'> Our Menu</h1>
       <p className='text-[white] font-inter font-normal text-[20px] flex justify-center'>Home /<span className='text-[#FF9F0D]'> Menu</span></p>
</div>
   
   
   {/* Starter Menu Section */}

  <div className=' w-full max-w-[1184px] grid grid-cols-1 lg:grid-cols-2'>  
         
     {/* Left Section */}
     <div>
        
        <Image src="/images/bowl.png" alt="basket" width={400} height={526} className= 'mt-10 md:ml-[60px] '/>
     
     </div> 

     {/* Right Section */}
    <div className=' w-full max-w-[550px] '>
  
       {/* Item 01 */}
 <div className='h-auto ml-[20px] md:ml-[50px] mt-[50px] border-b border-[#E0E0E0] lg:pb-16 pb-4'>    
   <h1 className='h-[56px] font-Helvetica font-[700] mb-3 text-[48px] text-[#333333] mt-[10px]'>Starter Menu</h1>
    <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Alder Grilled Chinook Salmon</h1>
    <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Toasted French bread topped with romano, cheddar</p>
    <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>560 CAL </p>
    <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px] '>32$</p>
 </div>
    
     {/* Item 02 */}
    
<div className='h-auto ml-[20px] md:ml-[50px] mt-[10px] my-4 border-b border-[#E0E0E0] lg:pb-16 pb-4'>
    <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px] '>Berries and creme tart</h1>
    <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
    <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>700 CAL </p>
    <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px]'>43$</p>
</div>
    
    {/* Item 03 */}
<div className='h-auto ml-[20px] md:ml-[50px] mt-[10px] my-4 border-b border-[#E0E0E0] lg:pb-16 pb-4'>
    <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px] '>Tormentoso Bush Pizza Pintoage</h1>
    <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Ground cumin, avocados, peeled and cubed</p>
    <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>1000 CAL</p>
    <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px]'>14$</p>
</div>  
    
     {/* Item 04 */}
<div className='h-auto ml-[20px] md:ml-[50px] mt-[10px] my-4 border-b border-[#E0E0E0] lg:pb-16 pb-4'>
    <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Spicy Vegan Potato Curry</h1>
    <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Spreadable cream cheese, crumbled blue cheese</p>
    <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>560 CAL</p>
    <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px]'>35$</p>
</div>
 </div>
      </div>
        
    {/* Main Course Section */}
    <div className='w-full max-w-[1184px] grid grid-cols-1 md:grid-cols-2 gap-4'>

{/* Left Section */}
<div className='w-full max-w-[550px]'>
    {/* Item 01 */}
    <div className='h-auto ml-[20px] md:ml-[50px] mt-[50px] border-b border-[#E0E0E0] lg:pb-16 pb-4'>
        <h1 className='h-[56px] font-Helvetica font-[700] mb-3 text-[48px] text-[#333333] mt-[10px]'>Main Course</h1>
        <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Optic Big Breakfast Combo Menu</h1>
        <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Toasted French bread topped with romano, cheddar</p>
        <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F]'>560 CAL</p>
        <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px]'>32$</p>
    </div>

    {/* Item 02 */}
    <div className='h-auto ml-[20px] md:ml-[50px] mt-[10px] my-4 border-b border-[#E0E0E0] lg:pb-16 pb-4'>
        <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Cashew Chicken With Stir-Fry</h1>
        <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
        <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F]'>700 CAL</p>
        <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px]'>43$</p>
    </div>

    {/* Item 03 */}
    <div className='h-auto ml-[20px] md:ml-[50px] mt-[10px] my-4 border-b border-[#E0E0E0] lg:pb-16 pb-4'>
        <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Vegetables & Green Salad</h1>
        <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Ground cumin, avocados, peeled and cubed</p>
        <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F]'>1000 CAL</p>
        <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px]'>43$</p>
    </div>

    {/* Item 04 */}
    <div className='h-auto ml-[20px] md:ml-[50px] mt-[10px] my-4 border-b border-[#E0E0E0] lg:pb-16 pb-4'>
        <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Spicy Vegan Potato Curry</h1>
        <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Spreadable cream cheese, crumbled blue cheese</p>
        <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F]'>560 CAL</p>
        <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px]'>35$</p>
    </div>
</div>

{/* Right Section */}
<div className='flex justify-center md:block'>
    <Image src='/images/burger.png' alt='basket' width={418} height={500} className='mt-10 md:ml-[60px] ' />
</div>
</div>



 {/* Full Image Section */}
   
   <div className='w-full max-w-[1184px] '>
      
      <Image src="/images/Clients.png" alt="basket" width={1315} height={468} className='mt-[90px]'/>
   
   </div>
    
     {/* Desserts Section */}

 <div className=' w-full max-w-[1184px] grid grid-cols-1 lg:grid-cols-2'>

   {/* Right Section */}
   
   <div>
      <Image src="/images/cupcake.png" alt="cupcake" width={400} height={468} className= 'mt-10 md:ml-[60px] '/>
   </div>

   {/* Left Section */}
  <div className=' w-full max-w-[550px] '>
 
        {/* Item 01 */}
    
<div className='h-auto ml-[20px] md:ml-[50px] mt-[50px] border-b border-[#E0E0E0] lg:pb-16 pb-4'>    
   <h1 className='h-[56px] font-Helvetica font-[700] mb-3 text-[48px] text-[#333333] mt-[10px]'>Desserts</h1>
    <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Fig and Lemon Cake</h1>
    <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Toasted French bread topped with romano, cheddar</p>
    <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>560 CAL </p>
    <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px] '>32$</p>
 </div>
    
     
   
      {/* Item 02 */}
<div className='h-auto ml-[20px] md:ml-[50px] mt-[10px] my-4 border-b border-[#E0E0E0] lg:pb-16 pb-4'>
    <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#FF9F0D] text-[24px] '>Creamy mascarpone cake</h1>
    <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
    <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>700 CAL </p>
    <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px]'>43$</p>
</div>
    
    {/* Item 03 */}
<div className='h-auto ml-[20px] md:ml-[50px] mt-[10px] my-4 border-b border-[#E0E0E0] lg:pb-16 pb-4'>
    <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px] '>pastry,blueberry,lemon juice</h1>
    <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Ground cumin, avocados, peeled and cubed</p>
    <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>1000 CAL</p>
    <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px]'>14$</p>
</div> 
    
     {/* Item 04 */}
   
<div className='h-auto ml-[20px] md:ml-[50px] mt-[10px] my-4 border-b border-[#E0E0E0] lg:pb-16 pb-4'>
    <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Pain au chocolate</h1>
    <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Spreadable cream cheese, crumbled blue cheese</p>
    <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>560 CAL</p>
    <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px]'>35$</p>
</div>
 
      </div>
         </div>
   

    {/* Drinks Section */}
  
  <div className='w-full max-w-[1184px] grid grid-cols-1 md:grid-cols-2 gap-4 '>
   
   {/* Left Section */}
   
   <div className='w-full max-w-[550px]'>

    {/* Item 01 */}
    <div className='h-auto ml-[20px] md:ml-[50px] mt-[50px] border-b border-[#E0E0E0] lg:pb-16 pb-4'>
        <h1 className='h-[56px] font-Helvetica font-[700] mb-3 text-[48px] text-[#333333] mt-[10px]'>Drinks</h1>
        <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>caffe macchiato</h1>
        <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Toasted French bread topped with romano, cheddar</p>
        <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F]'>560 CAL</p>
        <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px]'>32$</p>
    </div>

   
   {/* Item 02 */}
<div className='h-auto ml-[20px] md:ml-[50px] mt-[10px] my-4 border-b border-[#E0E0E0] lg:pb-16 pb-4'>
        <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Aporal spritz capaciano</h1>
        <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
        <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F]'>700 CAL</p>
        <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px]'>43$</p>
</div>
  
  {/* Item 03 */}
  <div className='h-auto ml-[20px] md:ml-[50px] mt-[10px] my-4 border-b border-[#E0E0E0] lg:pb-16 pb-4'>
        <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>caffe latte campuri</h1>
        <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Ground cumin, avocados, peeled and cubed</p>
        <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F]'>1000 CAL</p>
        <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px]'>43$</p>
    </div>
   
   {/* Item 04 */}
   <div className='h-auto ml-[20px] md:ml-[50px] mt-[10px] my-4 border-b border-[#E0E0E0] lg:pb-16 pb-4'>
        <h1 className='h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Tormentoso BushTea Pintoage</h1>
        <p className='h-[24px] font-Helvetica mb-2 font-normal text-[16px] text-[#4F4F4F]'>Spreadable cream cheese, crumbled blue cheese</p>
        <p className='h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F]'>560 CAL</p>
        <p className='h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] mt-2 md:ml-[450px] md:mt-[-90px]'>35$</p>
    </div>
</div>

   {/*Right Section*/}

   <div>
       <Image src="/images/drinks.png" alt="drinks" width={418} height={500} className= 'mt-10 md:ml-[60px]'/>
   </div>
</div>

{/* Image */}
<div className=' w-full max-w-[1184px] flex flex-col mb-10'>
    <p className='font-inter mt-[100px] mb-3 text-center  text-[18px] text-[#333333]'>Partners & Clients</p>
     <h1 className=' h-[56px] font-Helvetica font-[700] text-center  text-[28px] sm:text-[48px] text-[#333333] '> We work with the best people</h1>
     <div className='flex justify-center'>
    <Image src="/images/logo.png" alt="logo" width={1000} height={900} className='mt-[60px] px-[30px] '/> 
  </div> 
  </div>

</div>

   
  )
}
 
export default Menu ;

