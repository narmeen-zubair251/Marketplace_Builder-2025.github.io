"use client";
import { useEffect, useState } from "react";
import { Food } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allFood } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addtoCart } from "../actions/actions";
import Swal from "sweetalert2";



const Shop = () => {
  const [food, setFood] = useState<Food[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchFood() {
      const fetchedFood: Food[] = await client.fetch(allFood);
      setFood(fetchedFood);
    }
    fetchFood();
  }, []);

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

  const filteredFood = food.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tags ? item.tags.toString() : "").split(",")

      .some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
  );

  return (
    <div>
      <div
        className="w-full max-w-[1184px] h-[410px] bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/images/unsplash_4ycv3Ky1ZZU.png')" }}
      >
        <h1 className="text-[white] font-[700]  font-inter text-[48px] flex  justify-center items-center">Our Shop</h1>
        <p className="text-white text-lg">Home / <span className="text-[#FF9F0D]">Shop</span></p>
      </div>
            
            {/* Search Bar Input Section */}
      <div className="flex justify-center my-6">
        
        <input
          type="text"
          placeholder="Search food by name, category, or tags..."
          className="w-full max-w-lg p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={searchQuery}
         
          onChange={(e) => setSearchQuery(e.target.value)}
        />
       
      </div>
 
            {/* Items Alignmenit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 py-8">
        {filteredFood.map((food) => (
          <div
            className="border p-4 rounded-lg shadow-sm flex flex-col items-center transition-transform duration-300 ease-out hover:scale-90"
            key={food._id}
          >
            <Link href={`/product/${food.slug.current}`}>
              <h2 className="text-xl font-bold text-center">{food.name}</h2>
              {food.image && (
                <Image
                  src={urlFor(food.image).url()}
                  alt={food.name}
                  className="w-60"
                  width={500}
                  height={500}
                />
              )}
              <p className="text-center">{food.category}</p>
              <p className="text-center">{food.price ? `$${food.price}` : "Price not available"}</p>
              <p className="text-center"> {Array.isArray(food.tags) ? food.tags.join(", ") : "No tags available"}</p>
           
             
              
              {/* Add To Cart Button */}
              <button
                className=" ml-14 mt-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={(e) => addToCartAction(e, food)}
              >
                Add To Cart
              </button>
            </Link>
          </div>  
         
         
       

))}
        
      </div>
    </div>
  );
};

export default Shop;
        
                  
              
