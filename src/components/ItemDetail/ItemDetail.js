import React, { useState } from 'react';
import './ItemDetail.css';
import {ItemCount} from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';

export const ItemDetail = ({item}) => {
    const [count, setCount] = useState(0);
    const [finalizar, setFinalizar] = useState(false);

    const finalizarCompra = () => {if (count > 0) setFinalizar(!finalizar)};


    return (
        <div className='item-detail'>
            <img src={item.imagen} alt={item.nombre} />
            <div className='detail'>
                <h1>{item.nombre}</h1>
                <p>Precio: <b>${item.precio} </b></p>
                <p><i>{item.descripcion}</i></p>
                {!finalizar ? (
                    <div className='compra'>
                    <ItemCount stock={8} initial={0} count={count} setCount={setCount} />
                    <button onClick={finalizarCompra}> Añadir al carrito</button>
                    </div>

                ) : (
                    <div className='compra'>
                        <Link to='/carrito' >
                            <button onClick={finalizarCompra}> Ir al carrito</button>
                        </Link>
                        <button onClick={finalizarCompra}> Modificar</button>
                    </div>
                )
                }
            </div>
        </div>
    )
}