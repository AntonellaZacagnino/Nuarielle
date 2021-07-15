import React from 'react';
import {Link} from 'react-router-dom';

export const Item = ({item}) => {
    return (
        <Link to={`/item/${item.id}`} item={item}>
            <li> 
                <div>
                    <h6> {item.nombre}</h6>
                    <img src={item.imagen} />
                    <p> Precio: {item.precio} $ </p>
                </div>
            </li>
        </Link>
    )
}
