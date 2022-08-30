import Item from '../Item';
import React from 'react';

const ItemList = ({data =[]}) =>{
    return(
        data.map(producto => <Item key={producto.id} info={producto}></Item>)
    );
}

export default ItemList;