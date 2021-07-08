import React from 'react';
import './ItemListContainer.css';
import {ItemCount} from '../ItemCount/ItemCount';

const ItemListContainer = (props) =>  {
    return (
        <ItemCount stock={8} initial={0} />
    )
}

export default ItemListContainer;