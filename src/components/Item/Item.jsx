import React from 'react';
import {Link} from 'react-router-dom';

export const Item = ({item , categoria}) => {
    return (
        <Link to={`/${categoria}/${item.id}`} item={item}>
            <li key={item.id}> 
                <div>
                    <h6> {item.nombre}</h6>
                    <img src={item.img} alt={item.nombre}/>
                    <p> Precio: {item.precio} $ </p>
                </div>
            </li>
        </Link>
    )
}
