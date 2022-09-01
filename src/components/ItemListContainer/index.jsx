import React, {useEffect, useState} from "react";
import Texto from "../texto/texto";
import ItemCount from '../contador/contador.jsx';
import ItemList from "../ItemList";

const productos = [
    {id: 1, image:"http://http2.mlstatic.com/D_659774-MLA31603476762_072019-O.jpg",
title:"Shampoo"},
    {id:2, image:"https://farmacityar.vteximg.com.br/arquivos/ids/205340-1000-1000/150793_acondicionador-max-pro-v-restauracion-x-200-ml_imagen-1.jpg?v=637412425280600000",
title:"Acondicionador"},
    {id: 3, image:"https://m.media-amazon.com/images/I/71zxIbhXi+L._SL1500_.jpg",
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