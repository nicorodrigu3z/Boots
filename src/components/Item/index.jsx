import './item.css';

import React from 'react';

const Item = ({data}) => {
    return(
        <div>
            <div className='product' key={data.name}>
             <img src={data.image}></img>
             <h1>{data.tittle}</h1>
            </div>
        </div>
    );
}

export default Item;