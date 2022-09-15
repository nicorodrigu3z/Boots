import React from "react";
import './itemCart.css';
import { useCartContext } from "../../context/CartContext";


const ItemCart = ( { productos }) =>{
    const { removeProduct } = useCartContext();

    return (
        <div className="itemCart">
            <img src={productos.image} alt={productos.title}></img>
        <div>
            <p>Producto: {productos.title}</p>
            <p>Cantidad: {productos.quantity}</p>
            <p>Pecio u.: {productos.precio}</p>
            <p>Subtotal: ${productos.quantity * productos.price}</p>
            <button onClick={() => removeProduct(productos.id)}>Eliminar</button>
        </div>
        </div>
    )

}

export default ItemCart;