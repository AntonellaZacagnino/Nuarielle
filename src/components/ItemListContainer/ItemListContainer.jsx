import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
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
            <ItemList categoria={catId} />
        </div>
    )
}
