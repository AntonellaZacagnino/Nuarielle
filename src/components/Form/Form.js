import React, {useState, useEffect} from 'react';
import firebase from "firebase/app";
import { getFirestore } from '../../firebase/firebase';
import './Form.css';

export const Form = ({ carrito, total, limpiarCarrito }) => {
    const [database, setDatabase] = useState('')

    useEffect(() => {
        const db = getFirestore();
        setDatabase(db)
    }, [])
    
    const submitForm = (event) => {
        event.preventDefault();
        const clienteData = {
            nombre: event.target[0].value,
            apellido: event.target[1].value,
            email: event.target[2].value,
            telefono: event.target[3].value
        }

        const pedidoNuevo = {
            cliente: clienteData,
            items: carrito,
            fecha: new Date().toString(),
            total: total
        }

        const pedidos = database.collection('pedidos');
        let pedidoId;
        
        pedidos
            .add(pedidoNuevo)
            .then((res) => {
                pedidoId = res.id
            })
            .catch((error) =>{
                alert('Error!' + error)
            })
        console.log( database.collection('productos').doc('productos'));
        const checkearProductos = database.collection('productos').where(
            firebase.firestore.fieldPath.documentId(),
            "in",
            carrito.map((item) => item.id)
        )

        checkearProductos.get().then((query) => {
            const batch = database.batch();
            
            const productosAgotados = [];

            query.docs.forEach((doc, index) => {
                console.log();
                if (doc.data().stock >= pedidoNuevo.items[index].count) {
                    batch.update(doc.ref, {
                        stock: doc.data().stock - pedidoNuevo.items[index].count
                    })
                } else {
                    productosAgotados.push({ ...doc.data(), id: doc.id })
                }
            })
            if (checkearProductos === 0){
                batch.commit().then(() => {
                    alert('Gracias por tu compra!');
                    limpiarCarrito();
                })
            } else {
                alert('Error! Alguno de los items que seleccionaste estan agotados :(');
            }
        })
    }
    return (
        <div className='form-container'>
            <h4>Finalizar Compra</h4>
            <form onSubmit={submitForm}>
                <input placeholder="Nombre" type="text" />
                <input placeholder="Apellido" type="text" />
                <input placeholder="Mail" type="email" />
                <input placeholder="Teléfono" type="number" />
                <button type="submit"> Comprar </button>
            </form>
        </div>
    )
}