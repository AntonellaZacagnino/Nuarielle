import React from 'react';
import './ItemListContainer.css';
import {ItemCount} from '../ItemCount/ItemCount';
import {ItemList} from '../ItemList/ItemList';

const ItemListContainer = () =>  {

      return (
        <div>
            <ItemCount stock={8} initial={0} />
            <ItemList />
        </div>
    )
}

export default ItemListContainer;