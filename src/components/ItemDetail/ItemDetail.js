import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import {ItemCount} from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

export const ItemDetail = ({id, nombre, img, descripcion, precio, stock}) => {
    const [count, setCount] = useState(0);
    const [finalizar, setFinalizar] = useState(false);

    const finalizarCompra = () => {if (count > 0) setFinalizar(!finalizar)};
    
    const {agregarItem} = useContext(CartContext);

    const añadirItem = () => {

        agregarItem({
            id,
            nombre,
            precio,
            img,
            count
        })
        finalizarCompra()
    }

    return (
        <div className='item-detail'>
            <img src={img} alt={nombre} />
            <div className='detail'>
                <h1>{nombre}</h1>
                <p>En stock: {stock}</p>
                <p>Precio: <b>${precio} </b></p>
                <p><i>{descripcion}</i></p>
                {!finalizar ? (
                    <div className='compra'>
                    <ItemCount stock={stock} initial={0} count={count} setCount={setCount} />
                    <button onClick={añadirItem}> Añadir al carrito</button>
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