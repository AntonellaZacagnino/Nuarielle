import React from 'react';

export const Item = ({item}) => {
    return (
        <a href='#'>
            <li> 
                <div>
                    <h6> {item.nombre}</h6>
                    <img src={item.imagen} />
                    <p> Precio: {item.precio} $ </p>
                </div>
            </li>
        </a>
    )
}
