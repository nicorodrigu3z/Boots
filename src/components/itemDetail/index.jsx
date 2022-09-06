import { useState, useEffect } from "react";
import getFetch from '../../helper/helper'

const ItemDetail = () => {
const [data, setData] = useState({})
const [loading, setLoading] = useState(true)

useEffect(() => {
    getFetch
    .then(response =>{
        setData(response.find(prod => prod.id == 1))
        setLoading(false)
    })
}, [])
console.log(data)
     return (
        <div className="item-container">
            <h1>Item detail container</h1>
            {
                loading ? <h2>Cargando...</h2>
                :
                <div className="item-detail">
                    <img src={data.image}></img>
                    <h2>{data.tittle}</h2>

            </div>
            }
        </div>

         
     )
}

export default ItemDetail;
