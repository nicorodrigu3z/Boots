import React, {useEffect, useState} from "react";
import Texto from "../texto/texto";
import ItemCount from '../contador/contador.jsx';
import ItemList from "../ItemList";

const productos = [
    {id: 1, image:"https://www.bmdistribuidora.com.ar/productos/shampoo-para-cabellos-con-coloracion-silkey-x-1500-deyerli/",
title:"Shampoo"},
    {id:2, image:"https://www.farmacity.com/acondicionador-max-pro-v-restauracion-x-200-ml/p",
title:"Acondicionador"},
    {id: 3, image:"https://www.amazon.com/-/es/7750075034501-QUERATINA-ALISADO-BRASILE%C3%91O-XPRESS/dp/B017KK5T2G",
title:"Keratina"},
];

export const ItemListContainer = () =>{
  const [data, setData] = useState([]);

  useEffect(()=>{
    const getData = new Promise(resolve =>{
      setTimeout(()=>{
          resolve(productos);
      }, 2000);
    });
    getData.then(res => setData(res));

  }, [])

 const onAdd = (quantity) => {
  console.log(`compraste ${quantity} unidades`);
}

  return(
    <>
    <Texto greeting=""/>
    <ItemCount initial={1} stock={5} onAdd={onAdd} ></ItemCount>   
    <ItemList data={data}></ItemList>
   </>
  );
}

export default ItemListContainer;