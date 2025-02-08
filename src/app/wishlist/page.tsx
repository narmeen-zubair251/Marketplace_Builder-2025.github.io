"use client";

import { urlFor } from "@/sanity/lib/image";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

interface WishlistItem {
  _id: string;
  name: string;
  _type: "WishlistItem";
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    ) as WishlistItem[];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== id);
    setWishlist(updatedWishlist); // Update the wishlist state
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Update localStorage
  };

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromWishlist(id); 
         // Show success message after state update
        Swal.fire('Removed!', 'Item has been removed.', 'success'); 
       
      }
    });
  };

  return (
    <div className=" bg-gray-50 min-h-screen">
      <div
        className=" h-[410px] "
        style={{ backgroundImage: "url('/images/unsplash_4ycv3Ky1ZZU.png')" }}
      >
        <h1 className="text-[white] font-[700]  font-inter text-[48px] flex  pt-[100px] justify-center items-center">
          {" "}
          Wishlist
        </h1>
        <p className="text-[white] font-inter font-normal text-[20px] flex justify-center">
          Home /
        <span className="text-[#FF9F0D]">Wishlist</span>
        </p>
      </div>

      <h1 className=" mt-8 text-4xl font-bold text-center mb-6 text-gray-700">
        Your Wishlist❤❤
      </h1>
      {wishlist.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-12 py-8">
          {wishlist.map((item) => (
            <li
              key={item._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {item.image && (
                <img
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.name}
                </h2>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">No items in wishlist.</p>
      )}
    </div>
  );
}
