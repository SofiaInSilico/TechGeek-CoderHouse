
import React from "react";
// import imagen from "./assets/imagenes/iconocart.png";

const CartWidget  = () => {
    let descripcion = 'Ícono de carrito de compras';

    return (
        <div>
            <img src='./imagenes/iconocart.png' alt={descripcion} className= "img-fluid"/>
        </div>
    )
}
export default CartWidget;




