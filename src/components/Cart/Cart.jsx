import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext'
import { Form } from '../Form/Form';
import './Cart.css';

export const Cart = () => {

    const {carrito, eliminarItem, limpiarCarrito, totalCarrito, totalItem} = useContext(CartContext)

    const total = totalCarrito()
    return (
        <div className="cart-container">
            <h1>Carrito de compras</h1>
            {carrito.length === 0 ?(
                <div>
                    <h4>Actualmente no hay productos en el carrito :(</h4>
                    <Link to={'/'}>
                        <button id="borrar">Volver al inicio</button>
                    </Link>
                </div>
            ) : (
                <div>
                    <ul>
                        {carrito.map(c  => 
                            <li key={c.id}> 
                                <img src={c.img} alt={c.nombre} />
                                <p>{c.nombre}</p>
                                <p>Precio Total: {totalItem(c)}</p>
                                <p>Cantidad: {c.count}</p>
                                <button onClick={() => eliminarItem(c.id)}>
                                    <span  className="material-icons" >delete</span> 
                                </button>
                            </li>
                        )}
                    </ul>
                    <h2>Total: {total}</h2>
                    <button id="borrar" onClick={limpiarCarrito}>Vaciar carrito</button>
                    <Form carrito={carrito} total={total} limpiarCarrito={limpiarCarrito} />
                </div>
            )}
        </div>
    )
}