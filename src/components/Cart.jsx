import React from "react";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import trash from "../assets/imagenes/delete.png";
import carro from "../assets/imagenes/cart3.png";
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, deleteOne, clear, cartTotal, precioFinal } = useContext(CartContext);
    return (
        <div>
            <div className="container">
                {cartTotal() > 0 ?
                    <table className="table color">
                        <thead>
                            <tr>
                                <th scope="col" className="text-middle color">Imagen producto</th>
                                <th scope="col" className="text-middle color">Nombre producto</th>
                                <th scope="col" className="text-end color">Cantidad</th>
                                <th scope="col" className="text-end  fw-bold color">Precio</th>
                            
                                <th colSpan={"5"} className="text-end">
                                    <Link onClick={() => { clear() }}>
                                        <button className="btn color " title="Vaciar Carrito">Vaciar carrito <img src={trash} alt="Vaciar carrito" width="16" /></button>
                                    </Link>
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="text-start"><img src={item.img} alt={item.title} title={item.title} width="120" /></td>
                                    <td className="text-start align-middle">{item.title}</td>
                                    <td className="text-end align-middle">{item.cantidad} x ${item.price}</td>
                                    <td className="text-end align-middle">${item.cantidad * item.price}</td>
                                    <td className="text-end align-middle">
                                        <Link onClick={() => { deleteOne(item.id) }}><img src={trash} alt="Eliminar producto" title="Eliminar producto" width="24" /></Link>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end fw-bold">Precio total</td>
                                <td className="text-end fw-bold">${precioFinal()}</td>
                                <td className="text-end">
                                    <Link to={"/checkout"} title="Checkout">
                                        <button className="btn color">Comprar  <img src={carro} alt="Finalizar Compra" width="16" /></button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    : <div className="alert text-center color" role="alert">No hay productos en el carrito! Te sugerimos {<Link to="/items">Volver a productos</Link>}</div>}
            </div>
        </div>
    )
}

export default Cart;