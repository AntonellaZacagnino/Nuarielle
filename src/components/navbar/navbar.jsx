import React from 'react';
import './navbar.css';
import logo from '../../logo.png'
import CartWidget from '../CartWidget/CartWidget.js';

const Navbar = () =>  {
    return  (
    <div className='navbar'>
        <div>
            <img src={logo} alt="logo" />   
        </div>
        <div className="menu">
            <ul>
                <li> <a href="#">Tortas personalizadas</a> </li>
                <li> <a href="#">Tartas</a> </li>
                <li> <a href="#">Cupcakes</a></li>
                <li> <a href="#">Combos</a></li>
            </ul>
        </div>
        <CartWidget />
    </div>
    )
}

export default Navbar;