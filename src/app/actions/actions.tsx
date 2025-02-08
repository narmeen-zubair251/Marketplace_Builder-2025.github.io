import { Food } from "../../../types/products";


export const addtoCart = (food:Food) =>{
    const cart:Food[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const existingFoodIndex= cart.findIndex(item =>item._id === food._id)
    if (existingFoodIndex> -1){
        cart[existingFoodIndex].inventory += 1
    }
    else{
        cart.push({
            ...food,inventory:1
        })
    }
    localStorage.setItem('cart',JSON.stringify(cart))
}

export const removeFromCart =(foodId:string)=>{
    let cart : Food[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item =>item._id !== foodId)
    localStorage.setItem('cart',JSON.stringify(cart) )
}
export const updateCartQuantity = (foodId:string , quantity:number)=>{
    const cart : Food[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const FoodIndex = cart.findIndex(item =>item._id === foodId)
    if (FoodIndex> -1){
        cart[FoodIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart) )
    }
}

export const getCartItems=(): Food[]=>{
    return JSON.parse(localStorage.getItem('cart') || '[]')
}


