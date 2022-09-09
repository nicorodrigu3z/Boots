import './item.css';

import React from 'react';

const Item = ({data}) => {
    return(
        <div className='contenedor'>
            <div className='product' key={data.name}>
               <img  className='img' src={data.image}></img>
             <div className='informacion'>
               <h1>{data.title}</h1>
               <h2>{data.precio}</h2>
             </div>
            </div>
        </div>
    );
}

export default Item;