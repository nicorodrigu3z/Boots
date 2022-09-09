import React from 'react';
import Item from '../Item';
import {useState, useEffect} from 'react';
import getFetch from '../../helper/helper';
import './itemlist.css';

const ItemList = () =>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        getFetch.then(data =>{
            setData(data)
            setLoading(false)
        })
    }, [])
    return(
        <>
        <h1> Productos </h1>

        {
            loading ? <h2>Cargando...</h2>
            
            :

            <div className='grid-product' key={data.name}>
                {data.map(data =>(
                    <Item key={data.name} data={data}></Item>

                ))}
            </div>
        }
        </>
    )
}

export default ItemList;