import './item.css';

import React from 'react';

import { Link } from 'react-router-dom';

const Item = ({data}) => {
    return(
      <Link to={`/detalle/${data.id}`}>
        <div className='contenedor'>
            <div className='product' key={data.name}>
               <img  className='img' src={data.image}></img>
             <div className='informacion'>
               <h1>{data.title}</h1>
               <h2>{data.precio}</h2>
             </div>
            </div>
        </div>
        </Link>
    );
}

export default Item;