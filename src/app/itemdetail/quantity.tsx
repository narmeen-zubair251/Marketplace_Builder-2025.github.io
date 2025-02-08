'use client'
import React, { useState } from 'react';

export default function CartItem() {
  // State to manage quantity
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 58.0; // Price per item

  // Function to handle increment
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Function to handle decrement
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="max-w-md">
      {/* Item Information */}
     
      <p className="text-sm text-gray-500">Price per item: ${pricePerItem.toFixed(2)}</p>

      {/* Quantity and Buttons */}
      <div className="flex items-center space-x-4 mt-4">
        {/* Quantity Section */}
        <div>
          <label className="text-md font-semibold mb-3">Quantity</label>
          <div className="flex items-center space-x-2">
            {/* Decrement Button */}
            <button
              onClick={handleDecrement}
              className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500"
            >
              -
            </button>

            {/* Quantity Display */}
            <span className="text-lg font-medium">{quantity}</span>

            {/* Increment Button */}
            <button
              onClick={handleIncrement}
              className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500"
            >
              +
            </button>
          </div>
        </div>

        {/* Extra Options */}
        <div className="flex items-center space-x-3">
              <span className="ml-14 text-black text-md font-bold ">Extra</span>
              <div className="relative">
                <select className="rounded border appearance-none  py-2 focus:outline-none focus:ring-2 focus:ring-[#dca24a] focus:border-[#FF9F0D] text-base pl-3 pr-10">
                  <option>Cheese</option>
                  <option>Toppings</option>
                  <option>Sauces</option>
                  <option>Spices</option>
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-black pointer-events-none flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>
      </div>

      {/* Total Price */}
      <div className="mt-4 text-lg font-bold">
        ${`${(quantity * pricePerItem).toFixed(2)}`}
      </div>

      {/* Add to Cart Button */}
      <button className="mt-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">
        Add to Cart
      </button>
    </div>
  );
}
