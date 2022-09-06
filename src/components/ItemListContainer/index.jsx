import React, {useEffect, useState} from "react";
import Texto from "../texto/texto";
import ItemCount from '../contador/contador.jsx';
import ItemList from "../ItemList";



export const ItemListContainer = () =>{
  return(
    <>
    <Texto greeting=""/>
    <ItemCount initial={1} stock={5} onAdd={onAdd} ></ItemCount>   
    <ItemList data={data}></ItemList>
   </>
  );
}

export default ItemListContainer;