import React from 'react';
import './navbar.css';
import logo from '../../logo.png'
import CartWidget from '../CartWidget/CartWidget.js';
import {Link, NavLink} from 'react-router-dom';

export const Navbar = () =>  {
    const categorias = [
                        {
                            id: 'personalizadas',
                            nombre: 'Tortas personalizadas'
                        },
                        {
                            id: 'tortas',
                            nombre: "Tortas"
                        },
                        {
                            id: 'cupcakes',
                            nombre: "Cupcakes"
                        },
                        {
                            id: 'combos',
                            nombre: "Combos"
                        } 
                    ];

    return  (
    <div className='navbar'>
        <div>
            <Link to={'/'}> <img src={logo} alt="logo" /> </Link>
        </div>
        <div className="menu">
            <ul>
                {categorias.map(cat => <li> <NavLink to={`/categoria/${cat.id}`} activeClassName='active'>{cat.nombre} </NavLink></li>)}
            </ul>
        </div>
        <CartWidget />
    </div>
    )
}
