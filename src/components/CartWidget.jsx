import React from "react";
import imagen from "../assets/imagenes/cart3.png";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";


const CartWidget = () => {
    let descripcion = 'Ícono';
    const{cart} = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect (() => {
        let total_items = cart.reduce((total, item) => total+=item.cantidad, 0);
        setTotal(total_items);
    }, [cart]);

    return (
        <Link to={'/cart'}>
            <button type="button" className="btn cart position-relative">
                <img src={imagen} alt={descripcion} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{total}</span>
            </button>
        </Link>

        // <div>
        //     <img src={imagen} alt={descripcion} className="Cart" />
        // </div>
    )
}
export default CartWidget;




