import { useState, useEffect } from "react";
import getFetch from '../../helper/helper'
import React from "react";
import './itemDetail.css';
import { useParams } from "react-router-dom";

const ItemDetail = () => {
const [data, setData] = useState({})
const [loading, setLoading] = useState(true)
const { detalleId } = useParams();

useEffect(() => {
    getFetch
    .then(response =>{
        setData(response.find(prod => prod.id == 1))
        setLoading(false)
    })

    getFetch.then(res => setData(res.find(producto => producto.id === parseInt(detalleId)))
    )

}, [])

console.log(data)
     return (
        <div className="item-container">
            <h1>Detalle del producto</h1>
            <br></br>
            {
                loading ? <h2>Cargando...</h2>
                :
                <div className="item-detail">
                    <img src={data.image}></img>
                    <h1>{data.title}</h1>
                    <h2>{data.precio}</h2>
                </div>
            }
        </div>

         
     )
}

export default ItemDetail;
