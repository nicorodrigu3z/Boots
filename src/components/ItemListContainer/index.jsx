import React from "react";
import Texto from "../texto/texto";
import ItemCount from '../contador/contador.jsx';

export const ItemListContainer = () =>{

 const onAdd = (quantity) => {
  console.log(`compraste ${quantity} unidades`);
}

  return(
    <>
    <Texto greeting=""/>
    <ItemCount initial={1} stock={5} onAdd={onAdd} ></ItemCount>   
   </>
  );
}

export default ItemListContainer;