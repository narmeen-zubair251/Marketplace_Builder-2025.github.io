'use client';

import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Food } from '../../../types/products';
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const [cartItems, setCartItems] = useState<Food[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

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
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire('Removed!', 'Item has been removed.', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0).toFixed(2);
  };
 const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to checkout?',
      text: 'Please review your cart before checkout.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Proceed!',
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/checkout")
        setCartItems([]);

      }
    });
  };

  return (
    <div className="w-full max-w-[1184px]">
<div className='w-full h-[410px]' 
    style={{backgroundImage:"url('/images/unsplash_4ycv3Ky1ZZU.png')"}}>
           <h1 className='text-[white] font-[700]  font-inter text-[48px] flex  pt-[100px] justify-center items-center'>Cart</h1>
           <p className='text-[white] font-inter font-normal text-[20px] flex justify-center'>Home /<span className='text-[#FF9F0D]'> Cart</span></p>
    </div>

     <div className='container mx-auto px-4 py-6'>
      <h1 className="text-3xl font-bold text-center mb-6">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">Your cart is empty.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-start justify-between"
            >
              {item.image && (
                  <Image
                   src={urlFor(item.image).url()}
                   className="w-full h-40 object-cover rounded-md mb-4"
                   alt="image"
                   width={500}
                   height={500}
                  />
              )}
               
             
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-4">Price: ${item.price}</p>
              <div className="flex items-center mb-4">
                <button
                  onClick={() => handleDecrement(item._id)}
                  className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-4">{item.inventory}</span>
                <button
                  onClick={() => handleIncrement(item._id)}
                  className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-right mb-4">Total: ${calculateTotal()}</h3>
          <div className="flex justify-end">
            <button
              onClick={handleProceed}
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-green-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Cart;
