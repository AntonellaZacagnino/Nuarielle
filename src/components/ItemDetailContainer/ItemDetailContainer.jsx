import React, { useState } from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [displayItem, setDisplayItem] = useState([]);
    const item = 
        {
            id: 1,
            nombre: 'Torta Brownie',
            precio: 500,
            descripcion: 'Brownie de chocolate semiamargo, con una fina capa de dulce de leche, una bocha de helado americano de primera calidad, con lluvia de salsa de chocolate y hojas de mentas aromaticas.',
            imagen: "images/brownie.webp"
        }

    const showItem = () => {
        return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(item)
                },
                4000
                )
            }
        )
    }
    
    showItem().then((res) => setDisplayItem(res))

    return (
        <div>
            {<ItemDetail item={displayItem} />}
        </div>
    )
}