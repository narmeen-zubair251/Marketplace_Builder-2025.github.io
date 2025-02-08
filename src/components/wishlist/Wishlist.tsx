'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import Swal from 'sweetalert2';


interface WishlistItem {
  _id: string;
  name: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export default function WishlistButton({ item }: { item: WishlistItem }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]') as WishlistItem[];
    setWishlist(storedWishlist);
    console.log("Wishlist loaded from localStorage:", storedWishlist);
  }, []);

  const addToWishlist = (item: WishlistItem, setWishlist: React.Dispatch<React.SetStateAction<WishlistItem[]>>) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
  
    // Check if the item is already in the wishlist
    const exists = wishlist.some((food: WishlistItem) => food._id === item._id);
  
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
      }).then(() => {
        setWishlist(wishlist);
      });
    } else {

      // Show info alert if the item is already in the wishlist
      Swal.fire({
        position: "top-right",
        icon: "info",
        title: `${item.name} is already in the wishlist!`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  
  const toggleWishlist = () => {
    if (!item || !item._id) {
      console.error("Error: Item is undefined or missing _id.");
      return;
    }

    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]') as WishlistItem[];
    console.log("Before Update, Wishlist in LocalStorage:", storedWishlist);

    const isInWishlist = storedWishlist.some((i) => i._id === item._id);
    const updatedWishlist = isInWishlist
      ? storedWishlist.filter((i) => i._id !== item._id) // Remove item
      : [...storedWishlist, { _id: item._id, name: item.name, image: item.image }]; // Save image object

    console.log("Updated Wishlist Array:", updatedWishlist);

    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    console.log("Wishlist saved to localStorage!");

    setWishlist(updatedWishlist);
  };

  return (
    <button onClick={() => addToWishlist(item, setWishlist)} className="ml-2">
      <Heart className={wishlist.some((i) => i._id === item._id) ? 'text-red-500' : 'text-gray-400'} />
    </button>
  );
}
