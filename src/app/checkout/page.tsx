'use client'
import React, { useEffect, useState } from 'react'
import { Food } from '../../../types/products'
import { getCartItems } from '../actions/actions'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { ChevronRightIcon } from 'lucide-react'
import Swal from 'sweetalert2'

const Checkout = () => {
    const [cartItems, setCartItems] = useState<Food[]>([])
    const [discount, setDiscount] =useState<number>(0)
    const [formValues, setFormValues]= useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
    })
  
    const [formErrors, setFormErrors] = useState({
        firstName:false,
        lastName:false,
        email:false,
        phone:false,
        address:false,
        zipCode:false,
        city:false,  
    })
    useEffect(()=>{
        setCartItems(getCartItems())
        const appliedDiscount = localStorage.getItem("appliedDiscount")
        if(appliedDiscount){
            setDiscount(Number(appliedDiscount))
        }
    },[])
    
    const subtotal = cartItems.reduce(
        (total,item)=> total + item.price * item.inventory,(0))
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
            setFormValues({
                ...formValues,
                [e.target.id]: e.target.value
            })
        }
    const validateForm = ()=> {
        const errors = {
            firstName:!formValues.firstName,
        lastName:!formValues.lastName,
        email:!formValues.email,
        phone:!formValues.phone,
        address:!formValues.address,
        zipCode:!formValues.zipCode,
        city:!formValues.city,  
        };
        setFormErrors(errors);
        return Object.values(errors).every((error)=> !error);
    }
     const handlePlaceOrder = () =>{
        if(validateForm()){
            localStorage.removeItem("appliedDiscount")
            Swal.fire('Success', 'Your order has been placed successfully.', 'success'); 
        }

     }
    return (
        
    <div className='min-h-screen bg-gray-100'>
        <div className='w-full h-[410px]' 
    style={{backgroundImage:"url('/images/unsplash_4ycv3Ky1ZZU.png')"}}>
           <h1 className='text-[white] font-[700]  font-inter text-[48px] flex  pt-[100px] justify-center items-center'>Checkout</h1>
           <p className='text-[white] font-inter font-normal text-[20px] flex justify-center'>cart /<span className='text-[#FF9F0D]'> checkout</span></p>
    </div>
        <div className='mt-6'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <nav className='flex items-center gap-2 py-4'>
                    <Link href="/cart"
                    className='text-[#666666] hover:text-black transition text-md'
                    > cart
                    </Link> 
                    <ChevronRightIcon/>
                    <span>
                        Checkout
                    </span>
                </nav>
            </div>

        </div>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            {/* order summary */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='bg-slate-100 border rounded-lg p-6 space-y-6'>
                    <h2 className='text-lg font-semibold mb-4'>
                        Order Summary
                    </h2>
                    {cartItems.length > 0 ? (
                         cartItems.map((item) => (
                        <div key={item._id} className='flex items-center gap-4 py-3 border-b'>
                            <div className='w-16 h-16 rounded overflow-hidden' >
                                {item.image && (
                                    <Image
                                   src={urlFor(item.image).url()} 
                                   alt='image'
                                   width={50}
                                   height={50}
                                    className='object-cover w-full h-full'
                                    />
                                )}
                            </div>
                            <div className='flex-1'>
                               <h3 className='text-sm font-medium'>
                                {item.name}
                                </h3> 
                            <p className='text-xs '>Quantity : {item.inventory}</p> 
                            </div>
                            <p className='text-sm font-bold'>
                             ${item.price * item.inventory}  
                            </p>
                           
                        </div>
                         ))
                    ): (
                        <p className='text-xs font-medium'>Your cart is empty!</p>
                    )}
                    <div className='text-right pt-4'>
                        <p className='text-sm'>
                            SubTotal:<span className='font-medium'>${subtotal}</span>
                        </p>
                        <p className='text-sm'>
                            Discount: <span className='font-medium'>${discount}</span>
                        </p>
                        <p className='text-lg font-extrabold'>
                            Total:<span>${subtotal.toFixed(2)}</span>
                        </p>
                    </div>
                    
                </div>
                {/* Billing Form */}
                <div className='bg-slate-100 rounded-lg p-6 space-y-6 shadow-md'>
    <h2 className='text-xl font-semibold'>Billing Information</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className="flex flex-col">
            <label htmlFor='firstName'>First Name</label>
            <input
                type="text"
                id="firstName"
                placeholder="Enter Your First Name"
                value={formValues.firstName}
                onChange={handleInputChange}
                className="p-2 border rounded"
            />
            {formErrors.firstName && (
                <p className='text-sm text-red-500'>First Name is required</p>
            )}
        </div>
        <div className="flex flex-col">
            <label htmlFor='lastName'>Last Name</label>
            <input
                type="text"
                id="lastName"
                placeholder="Enter Your Last Name"
                value={formValues.lastName}
                onChange={handleInputChange}
                className="p-2 border rounded"
            />
            {formErrors.lastName && (
                <p className='text-sm text-red-500'>Last Name is required</p>
            )}
        </div>
        <div className="flex flex-col">
            <label htmlFor='address'>Address</label>
            <input
                type="text"
                id="address"
                placeholder="Enter Your Address"
                value={formValues.address}
                onChange={handleInputChange}
                className="p-2 border rounded"
            />
            {formErrors.address && (
                <p className='text-sm text-red-500'>Address is required</p>
            )}
        </div>
        <div className="flex flex-col">
            <label htmlFor='email'>Email</label>
            <input
                type="text"
                id="email"
                placeholder="Enter Your Email"
                value={formValues.email}
                onChange={handleInputChange}
                className="p-2 border rounded"
            />
            {formErrors.email && (
                <p className='text-sm text-red-500'>Email is required</p>
            )}
        </div>
        <div className="flex flex-col">
            <label htmlFor='phone'>Phone</label>
            <input
                type="text"
                id="phone"
                placeholder="Enter Your Phone Number"
                value={formValues.phone}
                onChange={handleInputChange}
                className="p-2 border rounded"
            />
            {formErrors.phone && (
                <p className='text-sm text-red-500'>Phone Number is required</p>
            )}
        </div>
        <div className="flex flex-col">
            <label htmlFor='zipCode'>Zip Code</label>
            <input
                type="text"
                id="zipCode"
                placeholder="Enter Your Zip Code"
                value={formValues.zipCode}
                onChange={handleInputChange}
                className="p-2 border rounded"
            />
            {formErrors.zipCode && (
                <p className='text-sm text-red-500'>Zip Code is required</p>
            )}
        </div>
        <div className="flex flex-col">
            <label htmlFor='city'>City</label>
            <input
                type="text"
                id="city"
                placeholder="Enter Your City"
                value={formValues.city}
                onChange={handleInputChange}
                className="p-2 border rounded"
            />
            {formErrors.city && (
                <p className='text-sm text-red-500'>City is required</p>
            )}
        </div>
    </div>
    <button 
        className='w-full h-12 bg-orange-400 hover:bg-orange-600 text-white rounded-lg mt-4'
        onClick={handlePlaceOrder}>
        Place Order
    </button>
</div>

                
 </div>
     </div>
 </div>
  
    
  )
} 

export default Checkout