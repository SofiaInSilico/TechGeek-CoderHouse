import React from "react";
import imagen from "../assets/imagenes/cart3.png";
import trash from "../assets/imagenes/delete.png";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";


const CartWidget = () => {
    let descripcion = 'Carrito';
    let descr = 'Borrar';
    const { clear, cartTotal} = useContext(CartContext);

    return (
        <div>
            <button type="button" className="btn cart position-relative" onClick={() => {clear()}}>
                <img src={trash} alt={descr} />
            </button>
            <Link to={'/cart'}>
                <button type="button" className="btn cart position-relative">
                    <img src={imagen} alt={descripcion} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
                </button>
            </Link>

        </div>
    )
}
export default CartWidget;




