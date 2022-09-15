import React from "react";
import { FiShoppingCart } from 'react-icons/fi'
import './carrito.css'
import { useCartContext } from "../../context/CartContext";



export const CartWidget = () => {
const {totalProducts} = useCartContext();
    return(
        <>
        <FiShoppingCart></FiShoppingCart>
        <span>{totalProducts() || ''} </span>
        </>
     );
}

export default CartWidget;