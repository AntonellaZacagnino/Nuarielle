import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import {ItemCount} from '../ItemCount/ItemCount';
import {ItemList} from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () =>  {
        const [categoria, setCategoria] = useState()
        const {catId} = useParams();
        useEffect(() => {
            return () => {
                setCategoria(catId)
            }
        }, [catId])

      return (
        <div>
            <ItemCount stock={8} initial={0} />
            <ItemList categoria={catId} />
        </div>
    )
}
