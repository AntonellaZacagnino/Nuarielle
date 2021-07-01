import React from 'react';
import './navbar.css';
import logo from '../../logo.png'


const Navbar = () =>  {
    return  (
    <div className='navbar'>
        <div>
            <img src={logo} alt="logo" />   
        </div>
        <div>
            <ul>
                <li> <a href="#">Tortas personalizadas</a> </li>
                <li> <a href="#">Tartas</a> </li>
                <li> <a href="#">Cupcakes</a></li>
                <li> <a href="#">Combos</a></li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar;