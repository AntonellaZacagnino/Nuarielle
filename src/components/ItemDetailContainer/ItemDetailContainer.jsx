import React, { useState } from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";

export const ItemDetailContainer = () => {
    const {itemId} = useParams();
    const [loading, setLoading] = useState(true);
    const override = css`
        display: block;
        margin: 20vh auto;
        border-color: red;
    `;

    const [displayItem, setDisplayItem] = useState([]);
    const items = [
        {
            id: 1,
            nombre: 'Cheesecake',
            precio: 400,
            imagen: "/images/tortas/cheesecake.webp",
            descripcion: "Base sablée de vainilla, cheese cake clásico realizado con productos de primera calidad, con cobertura de frutos rojos."
        },
        {
            id: 2,
            nombre: 'Lemon Pie',
            precio: 400,
            imagen: "/images/tortas/lemonpie.webp",
            descripcion: "Base sablée de vainilla, con crema de limón y merengue italiano."
        },
        {
            id: 3,
            nombre: 'Torta Oreo',
            precio: 600,
            imagen: "/images/tortas/oreo.webp",
            descripcion: "Hecho con bizcochuelo de chocolate, relleno de crema Oreo con pedacitos de cookies, con cobertura de ganache de chocolate y decorada con galletas Oreo."
        },
        {
            id: 4,
            nombre: 'Tiramisú',
            precio: 500,
            imagen: "/images/tortas/tiramisu.webp",
            descripcion: "Bizcochuelo de vainilla y almendra, embebido en café expresso, relleno con mousse de queso mascarpone, decorado con cacao."
        },
        {
            id: 5,
            nombre: 'Torta Brownie',
            precio: 500,
            imagen: "/images/tortas/brownie.webp",
            descripcion: "Base de brownie con nuez, con una bocha de helado americano de primera calidad, con salsa de chocolate y hojas de menta."
        },
        {
            id: 6,
            nombre: 'Red Velvet',
            precio: 600,
            imagen: "/images/tortas/redvelvet.webp",
            descripcion: "Bizcochuelo de terciopelo rojo, relleno con queso crema y decorado con frambuesas y cerezas."
        },
        {
            id: 7,
            nombre: 'Chocolate',
            precio: 600,
            imagen: "/images/cupcakes/chocolate.webp",
            descripcion: "Docena de cupcakes de chocolate con cubierta de Nutella."
        },
        {
            id: 8,
            nombre: 'Vainilla',
            precio: 500,
            imagen: "/images/cupcakes/vainilla.webp",
            descripcion: "Docena de cupcakes de vainilla con cubierta de buttercream. "
        },
        {
            id: 9,
            nombre: 'Limon',
            precio: 500,
            imagen: "/images/cupcakes/limon.webp",
            descripcion: "Docena de cupcakes de limón con cubierta de crema sabor limón y azucar glass."
        },
        {
            id: 10,
            nombre: 'Red Velvet',
            precio: 600,
            imagen: "/images/cupcakes/redvelvet.webp",
            descripcion: "Docena de cupcakes de terciopelo rojo con cubierta de queso crema."
        },
        {
            id: 11,
            nombre: 'Banana',
            precio: 500,
            imagen: "/images/cupcakes/banana.webp",
            descripcion: "Docena de cupcakes de banana con topping de almendras."
        },
        {
            id: 12,
            nombre: 'Animales',
            precio: 900,
            imagen: "/images/tematicas/animales.webp",
            descripcion: "Torta con decoración temática de animales. Bizcochuelos y rellenos a libre elección"
        },
        {
            id: 13,
            nombre: 'Arco Iris',
            precio: 900,
            imagen: "/images/tematicas/arcoiris.webp",
            descripcion: "Torta de 7 capas de bizcochuelo de vainilla con los colores del arcoiris, relleno y decoración de buttercream."
        },
        {
            id: 14,
            nombre: 'Floral',
            precio: 1000,
            imagen: "/images/tematicas/floral.webp",
            descripcion: "Torta con decoración flora. Minimo 2 pisos. Bizcochuelos, rellenos y color de capa de crema externa a libre elección."
        },
        {
            id: 15,
            nombre: 'Princesa',
            precio: 1200,
            imagen: "/images/tematicas/princesa.webp",
            descripcion: "Torta temática de princesa. Colores, cantidad de pisos, rellenos y bizcochuelos a libre elección."
        },
        {
            id: 16,
            nombre: 'Sirena',
            precio: 1200,
            imagen: "/images/tematicas/sirena.webp",
            descripcion: "Torta temática de sirena. Colores, rellenos y bizcochuelos a libre elección."
        },
        {
            id: 17,
            nombre: 'Unicornio',
            precio: 1100,
            imagen: "/images/tematicas/unicornio.webp",
            descripcion: "Torta temática de unicornio. Rellenos y bizcochuelos a libre elección."
        },
        {
            id: 18,
            nombre: 'Combo Sweet',
            precio: 1500,
            imagen: "/images/combos/sweet.webp",
            descripcion: "Combo compuesto por docena de cupcakes, torta de 1 piso con temática a libre elección y 2 docenas de macarons."
        },
        {
            id: 19,
            nombre: 'Combo Luxury',
            precio: 2300,
            imagen: "/images/combos/luxury.webp",
            descripcion: "Combo compuesto por 2 docenas de cupcakes, torta de 1 o 2 pisos con temática a libre elección, 1 torta de catalogo a elección."
        },
        {
            id: 20,
            nombre: 'Combo Deluxe',
            precio: 3100,
            imagen: "/images/combos/deluxe.webp",
            descripcion: "Combo compuesto por 3 docenas de cupcakes, torta de 2 o 3 pisos com temática a libre elección, 2 tortas de catalogo a elección, 4 docenas de macarons."
        },
    ]

    const showItem = () => {
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
    
    showItem().then((res) => res.map((item) => {if(item.id == itemId){ setDisplayItem(item) } } ))
    return (
        <div>
            {!loading ? 
            displayItem && <ItemDetail {...displayItem} />
            :
            <BounceLoader css={override} size={150} color={"#d8a3b3"} loading={loading} speedMultiplier={1} />
            }
        </div>
    )
}