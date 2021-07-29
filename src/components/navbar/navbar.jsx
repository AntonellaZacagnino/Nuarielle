import React from 'react';
import './navbar.css';
import logo from '../../logo.png'
import CartWidget from '../CartWidget/CartWidget.js';
import {Link, NavLink} from 'react-router-dom';
import {categorias} from '../../data/categorias.json'

export const Navbar = () =>  {

    return  (
    <div className='navbar'>
        <div>
            <Link to={'/'}> <img src={logo} alt="logo" /> </Link>
        </div>
        <div className="menu">
            <ul>
                {categorias.map(cat => <li key={cat.id} > <NavLink to={`/categoria/${cat.id}`} activeClassName='active'>{cat.nombre} </NavLink></li>)}
            </ul>
        </div>
        <CartWidget />
    </div>
    )
}
