import React, { useState } from 'react';
import './navbar.css';
import logo from '../../logo.png'
import CartWidget from '../CartWidget/CartWidget.js';
import {Link, NavLink} from 'react-router-dom';
import data from '../../data/categorias.json'
const {categorias} = data;

export const Navbar = () =>  {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return  (
    <div className='navbar'>
        <div className='navbar-brand'>
            <Link to={'/'}> <img src={logo} alt="logo" /> </Link>
        </div>
        
        <button className='hamburger' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        
        <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
            <ul>
                {categorias.map(cat => 
                    <li key={cat.id}>
                        <NavLink 
                            to={`/categoria/${cat.id}`} 
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            {cat.nombre}
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
        
        <div className='navbar-cart'>
            <CartWidget />
        </div>
    </div>
    )
}
