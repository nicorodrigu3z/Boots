import React, {useState, useEffect} from "react";
import ItemDetail from "../itemDetail";

const productos = {id: 1, image:"http://http2.mlstatic.com/D_659774-MLA31603476762_072019-O.jpg",
title:"Shampoo"}

export const ItemDetailContainer = () =>{

   

    return(
        <ItemDetail></ItemDetail>
    );
}

export default ItemDetailContainer;