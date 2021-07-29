import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import './Cart.css';

export const Cart = () => {

    const {carrito, eliminarItem, limpiarCarrito} = useContext(CartContext)

    return (
        <div className="cart-container">
            <h1>Carrito de compras</h1>
            {carrito.length == 0 ?(
                <h4>Actualmente no hay productos en el carrito :(</h4>
            ) : (
                <div>
                    <ul>
                        {carrito.map(c  => 
                            <li key={c.id}> 
                                <img src={c.imagen} alt={c.nombre} />
                                <p>{c.nombre}</p>
                                <p>Precio: {c.precio}</p>
                                <p>Cantidad: {c.count}</p>
                                <button onClick={() => eliminarItem(c.id)}>
                                    <span  className="material-icons" >delete</span> 
                                </button>
                            </li>
                        )}
                    </ul>
                    <button id="borrar" onClick={limpiarCarrito}>Vaciar carrito</button>
                </div>
            )}
        </div>
    )
}