import React, {useEffect, useState} from "react";
import Texto from "../texto/texto";
import ItemList from "../ItemList";



export const ItemListContainer = () =>{
  return(
    <>
    <Texto greeting=""/>
       
    <ItemList ></ItemList>
   </>
  );
}

export default ItemListContainer;