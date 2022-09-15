import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../itemCart";


const Cart = () =>{
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
             <p>No hay nada en el carrito</p>
             <Link to='/'>Volver a comprar</Link>
            </>
        );
    }

    return(
    <>
     {
        cart.map(productos => <ItemCart key={productos.id} productos={productos}></ItemCart>)
     }    
     <p>
        total: {totalPrice()}
     </p>
    </>
    )
}

export default Cart;