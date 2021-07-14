import React from 'react';
import './ItemDetail.css';

export const ItemDetail = ({item}) => {

    return (
        <div className='item-detail'>
            <img src={item.imagen} alt={item.nombre} />
            <div className='detail'>
                <h1>{item.nombre}</h1>
                <p>Precio: <b>${item.precio} </b></p>
                <p><i>{item.descripcion}</i></p>
            </div>
        </div>
    )
}