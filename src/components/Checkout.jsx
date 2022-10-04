import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Success from "./Success";

const Checkout = () => {

    const { cart, cartTotal, precioFinal, clear } = useContext(CartContext)
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [orderId, setOrderId] = useState('');

    const setOrder = () => {
        if ((nombre !== "") && (email !== "") && (telefono !== "")) {
            const buyer = { name: nombre, email: email, phone: telefono };
            const items = [];
            cart.forEach((item) => {
                items.push({ id: item.id, title: item.title, price: item.price, quantity: item.cantidad })
            });

            const date = new Date();
            const now = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            const order = { buyer: buyer, items: items, date:now, total: precioFinal() };
            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, order).then((data) => {
                clear();
                setOrderId(data.id);
                console.log("El código de orden es" + data.id);
            })
        }

    }

    return (

        <div className="container py-5">
            {cartTotal() > 0 ?
                <div className="col-md-6 offset-md-2">
                    <div className="col-md-12 offset-md-1">
                        <h4 className="color"> Productos seleccionados</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-start color">Producto</th>
                                    <th scope="col" className="text-start align-middle color">Cantidad</th>
                                    <th scope="col" className="text-end fw-bold color">Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="text-start color"><img src={item.img} alt={item.name} title={item.name} width="120" /></td>
                                        <td className="text-start align-middle color">{item.name} x {item.cantidad}</td>
                                        <td className="text-end align-middle color">${item.cantidad * item.price}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={2} className="text-end fw-bold color">Total a pagar</td>
                                    <td className="text-end fw-bold color">${precioFinal()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-12 offset-md-1">
                        <h5 className="color"> Datos del cliente</h5>
                        <form>
                            <div className="mb-3">
                                <label for="nombre" className="form-label color">Nombre</label>
                                <input type="text" className="form-control" id="nombre" onInput={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label color">E-mail</label>
                                <input type="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="telefono" className="form-label color">Número telefónico</label>
                                <input type="text" className="form-control" id="telefono" onInput={(e) => setTelefono(e.target.value)} />
                            </div>
                            <button type="button" className="btn btn-outline-light" onClick={() => { setOrder() }}>Generar compra</button>
                        </form>
                    </div>

                </div>
                : orderId !== "" ? <Success id={orderId} />
                    : <div className="alert alert-danger text-center">No se encontraron productos seleccionados! Te sugerimos {<Link to="/items">Volver a productos</Link>}</div>}
        </div>
    )

}

export default Checkout;