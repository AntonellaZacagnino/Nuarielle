import React from 'react';

export const Item = ({nombre, imagen, precio}) => {
    return (
        <li> 
            <div>
                <h6> {nombre}</h6>
                <img src={imagen} />
                <p> Precio: {precio} $ </p>
            </div>
        </li>
    )
}
