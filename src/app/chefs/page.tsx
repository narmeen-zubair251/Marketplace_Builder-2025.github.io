import { fetchData } from "@/sanity/lib/fetch"
import { Chef } from "@/sanity/lib/queries"
import Image from "next/image"

type Chef ={
    _id:string
    name:string
     position:string
    experience: string
    speciality: string
    imageUrl: string
  }

  export default async function OurChef(){
    const  chefs: Chef[] = await fetchData({query :Chef})
    return(
        <div>
       <div className='w-full h-[410px]' 
    style={{backgroundImage:"url('/images/unsplash_4ycv3Ky1ZZU.png')"}}>
           <h1 className='text-[white] font-[700]  font-inter text-[48px] flex  pt-[100px] justify-center items-center'>Our Chefs</h1>
           <p className='text-[white] font-inter font-normal text-[20px] flex justify-center'>Home /<span className='text-[#FF9F0D]'> Chef</span></p>
    </div>   
            <h1 className="py-10 font-inter text-4xl font-bold flex justify-center items-center">Our Chefs</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    chefs.map((chef)=>(
                    <div className="border p-4 rounded-lg shadow-sm flex flex-col items-center transition-transform duration-300 ease-out hover:scale-90" key={chef._id}>
                      <Image src={chef.imageUrl} alt={chef.name} className="w-60"width={500} height={500}/>
                        <h2 className="text-xl font-bold text-center font-inter">
                            {chef.name}
                       </h2>
                       <p className="text-center font-inter">
                       {chef.position}
                       </p>
                       <p className="text-center font-inter">
                        {chef.experience}
                       </p>
                       <p className="text-center font-inter"> 
                        {chef.speciality}
                       </p>
                        
                    </div>
                    ))
                }

            </div>
        </div>
       
    )
  }
