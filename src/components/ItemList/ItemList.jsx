import React, {useContext, useState} from 'react'
import {Item} from '../Item/Item'
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";
import { CartContext } from '../../context/cartContext';

export const ItemList = ({categoria}) => {
    const [itemsDisplay, setItemsDisplay] = useState([]);
    const [loading, setLoading] = useState(true);
    const override = css`
        display: block;
        margin: 20vh auto;
        border-color: red;
    `;

    const tortas = [
        {
            id: 1,
            nombre: 'Cheesecake',
            precio: 400,
            imagen: "/images/tortas/cheesecake.webp"
        },
        {
            id: 2,
            nombre: 'Lemon Pie',
            precio: 400,
            imagen: "/images/tortas/lemonpie.webp"
        },
        {
            id: 3,
            nombre: 'Torta Oreo',
            precio: 600,
            imagen: "/images/tortas/oreo.webp"
        },
        {
            id: 4,
            nombre: 'Tiramisú',
            precio: 500,
            imagen: "/images/tortas/tiramisu.webp"
        },
        {
            id: 5,
            nombre: 'Torta Brownie',
            precio: 500,
            imagen: "/images/tortas/brownie.webp"
        },
        {
            id: 6,
            nombre: 'Red Velvet',
            precio: 600,
            imagen: "/images/tortas/redvelvet.webp"
        }
    ];

    const cupcakes = [
        {
            id: 7,
            nombre: 'Chocolate',
            precio: 600,
            imagen: "/images/cupcakes/chocolate.webp"
        },
        {
            id: 8,
            nombre: 'Vainilla',
            precio: 500,
            imagen: "/images/cupcakes/vainilla.webp"
        },
        {
            id: 9,
            nombre: 'Limon',
            precio: 500,
            imagen: "/images/cupcakes/limon.webp"
        },
        {
            id: 10,
            nombre: 'Red Velvet',
            precio: 600,
            imagen: "/images/cupcakes/redvelvet.webp"
        },
        {
            id: 11,
            nombre: 'Banana',
            precio: 500,
            imagen: "/images/cupcakes/banana.webp"
        },
    ]

    const personalizadas = [
        {
            id: 12,
            nombre: 'Animales',
            precio: 900,
            imagen: "/images/tematicas/animales.webp"
        },
        {
            id: 13,
            nombre: 'Arco Iris',
            precio: 900,
            imagen: "/images/tematicas/arcoiris.webp"
        },
        {
            id: 14,
            nombre: 'Floral',
            precio: 1000,
            imagen: "/images/tematicas/floral.webp"
        },
        {
            id: 15,
            nombre: 'Princesa',
            precio: 1200,
            imagen: "/images/tematicas/princesa.webp"
        },
        {
            id: 16,
            nombre: 'Sirena',
            precio: 1200,
            imagen: "/images/tematicas/sirena.webp"
        },
        {
            id: 17,
            nombre: 'Unicornio',
            precio: 1100,
            imagen: "/images/tematicas/unicornio.webp"
        },
    ]

    const combos = [
        {
            id: 18,
            nombre: 'Combo Sweet',
            precio: 1500,
            imagen: "/images/combos/sweet.webp"
        },
        {
            id: 19,
            nombre: 'Combo Luxury',
            precio: 2300,
            imagen: "/images/combos/luxury.webp"
        },
        {
            id: 20,
            nombre: 'Combo Deluxe',
            precio: 3100,
            imagen: "/images/combos/deluxe.webp"
        },
    ]

    const items = [
                    {key:'tortas', array: tortas}, 
                    {key:'personalizadas', array:personalizadas}, 
                    {key:'cupcakes', array: cupcakes}, 
                    {key:'combos', array: combos}
                ]
    
    const contexto = useContext(CartContext);
    
    const showItems = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                    resolve(items)
                    setLoading(false)
                },
                2000
                )
            }
        )
    }
    
    showItems().then((res) => res.map(i => {if(i.key === categoria){ setItemsDisplay(i.array)}} ))
    return (
        <div className="items">
            <ul>
                {!loading ? 
                itemsDisplay.map((item) => <Item item={item} categoria={categoria} key={item.id} /> )
                :
                <BounceLoader css={override} size={150} color={"#d8a3b3"} loading={loading} speedMultiplier={1} />
                }
            </ul>    
        </div>    
    )
}