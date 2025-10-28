import React from 'react';
import { db } from '../../firebase/firebase';
import { collection, addDoc, query, where, getDocs, doc, updateDoc, documentId } from 'firebase/firestore';
import './Form.css';

export const Form = ({ carrito, total, limpiarCarrito }) => {
    
    const submitForm = async (event) => {
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

        try {
            await addDoc(collection(db, 'pedidos'), pedidoNuevo);
            
            const q = query(
                collection(db, 'productos'),
                where(documentId(), "in", carrito.map((item) => item.id))
            );
            
            const querySnapshot = await getDocs(q);
            const productosAgotados = [];

            for (let i = 0; i < querySnapshot.docs.length; i++) {
                const docSnap = querySnapshot.docs[i];
                const producto = docSnap.data();
                const itemCarrito = carrito.find(item => item.id === docSnap.id);
                
                if (producto.stock >= itemCarrito.count) {
                    await updateDoc(doc(db, 'productos', docSnap.id), {
                        stock: producto.stock - itemCarrito.count
                    });
                } else {
                    productosAgotados.push({ ...producto, id: docSnap.id });
                }
            }
            
            if (productosAgotados.length === 0) {
                // Crear y mostrar toast de éxito
                const toastDiv = document.createElement('div');
                toastDiv.className = 'toast toast-success';
                toastDiv.innerHTML = `
                    <div class="toast-content">
                        <div class="toast-icon">✅</div>
                        <div class="toast-message">¡Gracias por tu compra! Tu pedido ha sido procesado exitosamente.</div>
                        <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
                    </div>
                `;
                document.body.appendChild(toastDiv);
                setTimeout(() => {
                    if (toastDiv.parentNode) toastDiv.remove();
                }, 5000);
                setTimeout(() => limpiarCarrito(), 2000);
            } else {
                // Crear y mostrar toast de error
                const toastDiv = document.createElement('div');
                toastDiv.className = 'toast toast-error';
                toastDiv.innerHTML = `
                    <div class="toast-content">
                        <div class="toast-icon">❌</div>
                        <div class="toast-message">Error: Algunos productos están agotados. Por favor, revisa tu carrito.</div>
                        <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
                    </div>
                `;
                document.body.appendChild(toastDiv);
                setTimeout(() => {
                    if (toastDiv.parentNode) toastDiv.remove();
                }, 5000);
            }
        } catch (error) {
            // Crear y mostrar toast de error
            const toastDiv = document.createElement('div');
            toastDiv.className = 'toast toast-error';
            toastDiv.innerHTML = `
                <div class="toast-content">
                    <div class="toast-icon">❌</div>
                    <div class="toast-message">Error al procesar la compra. Por favor, intenta nuevamente.</div>
                    <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
                </div>
            `;
            document.body.appendChild(toastDiv);
            setTimeout(() => {
                if (toastDiv.parentNode) toastDiv.remove();
            }, 5000);
        }
    }
    return (
        <div className='form-container'>
            <h4>Finalizar Compra</h4>
            <form onSubmit={submitForm}>
                <input placeholder="Nombre" type="text" required />
                <input placeholder="Apellido" type="text" required />
                <input placeholder="Mail" type="email" required />
                <input placeholder="Teléfono" type="number" required />
                <button type="submit"> Comprar </button>
            </form>
        </div>
    )
}