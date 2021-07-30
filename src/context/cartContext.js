import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const itemExistente = (item) => 
        carrito.filter(c => c.id === item.id).length === 0;
    

    const agregarItem = (item) => {
        if (itemExistente(item)){
            setCarrito([...carrito, item])
        } else{
            alert('Ya tenes este item en tu carrito!');
        }
    }

    const eliminarItem = (item) =>{
        setCarrito(carrito.filter(producto => producto.id !== item))
    }

    const totalCarrito = () => {
        return carrito.reduce( (accion, producto) => accion + (producto.precio * producto.count), 0)
    }

    const totalItem = (item) => {
        return item.precio * item.count
    }

    const cantidadCarrito = () => {
        return carrito.reduce( (accion, producto) => accion + producto.count, 0)
    }

    const limpiarCarrito = () => {
        setCarrito([]);
    }

    return (
        <CartContext.Provider value={{carrito, agregarItem, totalCarrito, totalItem, cantidadCarrito, eliminarItem, limpiarCarrito}}>
            {children}
        </CartContext.Provider> 
    )
}
