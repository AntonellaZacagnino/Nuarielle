import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import './CartWidget.css';

const CartWidget = () =>  {

    const {cantidadCarrito} = useContext(CartContext);
    
    return (
        <Link to={'/carrito'}>
            {cantidadCarrito() > 0 ? 
            (
                <span id='count'>{cantidadCarrito()} </span> 
            ) : (
                <span ></span> 
            )}
            <span id="icon" className="material-icons">shopping_cart</span> 
        </Link>
    )
}

export default CartWidget;
