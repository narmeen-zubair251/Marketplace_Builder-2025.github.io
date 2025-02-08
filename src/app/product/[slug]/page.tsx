
'use client'
import { client } from "@/sanity/lib/client";
import { Food } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { addtoCart } from "@/app/actions/actions";
import Swal from "sweetalert2";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import Link from "next/link";
import WishlistButton from '../../../components/wishlist/Wishlist'; 

interface ProductPageProps {
  params: { slug: string };
}

// Data fetching in the server-side function
async function getFood(slug: string): Promise<Food> {
  return client.fetch(
    groq`*[_type == "food" && slug.current == $slug][0]{
      _id,
      name,
      _type,
      image,
      price,
      discription,
    }`,
    { slug }
  );
}
const addToWishlist = (item: Food) => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

  // Check if the item is already in the wishlist
  const exists = wishlist.some((food: Food) => food._id === item._id);
  
  if (!exists) {
    wishlist.push(item);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    // Show success alert
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${item.name} added to wishlist!`,
      showConfirmButton: false,
      timer: 2000,
    });
  } else {
    // Show info alert
    Swal.fire({
      position: "top-right",
      icon: "info",
      title: `${item.name} is already in the wishlist!`,
      showConfirmButton: false,
      timer: 2000,
    });
  }
};




export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const food = await getFood(slug);

  const addToCartAction = (e: React.MouseEvent, food: Food) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${food.name} added to cart`,
      showConfirmButton: false,
      timer: 2000,
    });
    addtoCart(food);
  };
  console.log("Food item being passed to WishlistButton:", food);
  return (
    <div className="w-full max-w-[1184px]">
<div className=' h-[410px] ' style={{backgroundImage:"url('/images/unsplash_4ycv3Ky1ZZU.png')"}}>
       <h1 className='text-[white] font-[700]  font-inter text-[48px] flex  pt-[100px] justify-center items-center'>Selected Product</h1>
       <p className='text-[white] font-inter font-normal text-[20px] flex justify-center'>Shop /<span className='text-[#FF9F0D]'>details</span></p>
</div>

    
       {/* Item Details Section Starts Here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {food.image && (
            <Image
              src={urlFor(food.image).url()}
              alt={food.name || "Food Image"}
              width={400}
              height={600}
              className="mt-6 ml-10 w-[400px] h-[400px]"
            />
          )}
        </div>

        <div className="flex flex-col gap-8 mt-8">
          <h1 className="text-4xl font-bold font-inter mb-4">{food.name}</h1>
          <p className="text-4xl">
            {food.price ? `$${food.price}` : "Price not available"}
          </p>
  
    {/* Star Rating */}
  <div className="flex items-center space-x-1 mt-5">

    <span className="text-yellow-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"       viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.429 8.199 1.191-5.93 5.779 1.398 8.147L12 18.896l-7.336 3.857 1.398-8.147-5.93-5.779 8.199-1.191z" />
        </svg>
    </span>

   <span className="text-yellow-500">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"      viewBox="0   0 24 24">
        <path d="M12 .587l3.668 7.429 8.199 1.191-5.93 5.779 1.398 8.147L12 18.896l-7.336 3.857 1.398-8.147-5.93-5.779 8.199-1.191z" />
    </svg>
   </span>

  <span className="text-yellow-500">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.429 8.199 1.191-5.93 5.779 1.398 8.147L12 18.896l-7.336 3.857 1.398-8.147-5.93-5.779 8.199-1.191z" />
      </svg>
  </span>

   <span className="text-gray-300">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0   0   24 24">
        <path d="M12 .587l3.668 7.429 8.199 1.191-5.93 5.779 1.398 8.147L12 18.896l-7.336 3.857 1.398-8.147-5.93-5.779 8.199-1.191z" />
     </svg>
   </span>

  <span className="text-sm text-gray-600">4.5</span>
 
 </div>
          
          
          {/* Item Discription */}
          <p className="text-md font-poppins mt-5">
            {food.discription}
          </p>
          
          
           {/* Add To Cart */}
          <div className="flex gap-5 ">
           <button
              className="bg-gradient-to-r from-orange-500 to-yellow-500 font-sans text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
              onClick={(e) => addToCartAction(e, food)}>
               Add To Cart
          </button>

            {/* Add To Wishlist */}
          <div className=" flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 font-sans text-white font-semibold px-4 py-3 rounded-2xl shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out ">
           <WishlistButton item={food} />
          </div>



        <Link href={"/cart"}>
            <button className="px-4 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:text-red-800 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
                <FaCartShopping />
            </button>
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
