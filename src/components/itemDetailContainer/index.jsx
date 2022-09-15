import React, {useState, useEffect} from "react";
import ItemDetail from "../itemDetail";
import ItemCount from '../contador/contador.jsx';
import './itemDetailConteiner.css';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();


    const onAdd = (data, quantity) =>{
        setGoToCart(true);
        addProduct(data, quantity);
    }

return(
    <div className="contenedor">
        <div className="detalle-producto">
        <ItemDetail></ItemDetail>
        </div>
        {
           goToCart
           ? <Link to='/carrito'>Terminar compra</Link>
           : <ItemCount initial={3} stock={5} onAdd={onAdd} ></ItemCount>
        }
    </div>
)
}

export default ItemDetailContainer;