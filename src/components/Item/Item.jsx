import React from 'react';
import {Link} from 'react-router-dom';

export const Item = ({item , categoria}) => {
    return (
        <Link to={`/${categoria}/${item.id}`} item={item}>
            <li> 
                <div>
                    <h6> {item.nombre}</h6>
                    <img src={item.imagen} alt={item.nombre}/>
                    <p> Precio: {item.precio} $ </p>
                </div>
            </li>
        </Link>
    )
}
