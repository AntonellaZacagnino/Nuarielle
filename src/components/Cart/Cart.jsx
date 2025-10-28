import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext'
import { Form } from '../Form/Form';
import { Toast } from '../Toast/Toast';
import './Cart.css';

export const Cart = () => {
    const [toast, setToast] = useState({ isVisible: false, message: '', type: '' });
    const {carrito, eliminarItem, limpiarCarrito, totalCarrito, totalItem} = useContext(CartContext)
    
    const showToast = (message, type) => {
        setToast({ isVisible: true, message, type });
        setTimeout(() => setToast({ isVisible: false, message: '', type: '' }), 3000);
    };
    
    const closeToast = () => {
        setToast({ isVisible: false, message: '', type: '' });
    };
    
    const handleEliminarItem = (id) => {
        eliminarItem(id);
        showToast('Producto eliminado del carrito', 'info');
    };
    
    const handleLimpiarCarrito = () => {
        limpiarCarrito();
        showToast('Carrito vaciado', 'info');
    };

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
                                <button onClick={() => handleEliminarItem(c.id)}>
                                    <span  className="material-icons" >delete</span> 
                                </button>
                            </li>
                        )}
                    </ul>
                    <h2>Total: {total}</h2>
                    <button id="borrar" onClick={handleLimpiarCarrito}>Vaciar carrito</button>
                    <Form carrito={carrito} total={total} limpiarCarrito={limpiarCarrito} />
                </div>
            )}
            <Toast 
                message={toast.message} 
                type={toast.type} 
                isVisible={toast.isVisible} 
                onClose={closeToast} 
            />
        </div>
    )
}