import React, {useState, useEffect} from "react";
import ItemDetail from "../itemDetail";
import ItemCount from '../contador/contador.jsx';
import './itemDetailConteiner.css';

const ItemDetailContainer = () => {
return(
    <div className="contenedor">
        <div className="detalle-producto">
        <ItemDetail></ItemDetail>
        </div>
        <div className="contador">
        <ItemCount ></ItemCount>
        </div>
    </div>
)
}

export default ItemDetailContainer;