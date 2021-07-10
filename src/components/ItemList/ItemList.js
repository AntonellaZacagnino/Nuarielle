import React, {useEffect, useState} from 'react'
import {Item} from '../Item/Item'

export const ItemList = () => {
    const [itemsDisplay, setItemsDisplay] = useState([]);
    const items = [
        {
            id: 1,
            nombre: 'Cheesecake',
            precio: 400,
            imagen: "images/cheesecake.webp"
        },
        {
            id: 2,
            nombre: 'Lemon Pie',
            precio: 400,
            imagen: "images/lemonpie.webp"
        },
        {
            id: 3,
            nombre: 'Torta Oreo',
            precio: 600,
            imagen: "images/oreo.webp"
        },
        {
            id: 4,
            nombre: 'Tiramisú',
            precio: 500,
            imagen: "images/tiramisu.webp"
        },
        {
            id: 5,
            nombre: 'Torta Brownie',
            precio: 500,
            imagen: "images/brownie.webp"
        },
        {
            id: 6,
            nombre: 'Red Velvet',
            precio: 600,
            imagen: "images/redvelvet.webp"
        }
    ];
    
    const showItems = () => {
        return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(items)
                },
                2000
                )
            }
        )
    }
    
    showItems().then((res) => setItemsDisplay(res))
    return (
        <div className="items">
            <ul>
                {itemsDisplay.map(item => <Item key={item.id} nombre={item.nombre} imagen={item.imagen} precio={item.precio} /> )}
            </ul>    
        </div>    
    )
}