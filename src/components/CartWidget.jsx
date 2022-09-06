import React from "react";
import imagen from "./imagenes/iconocart.png";

const CartWidget  = () => {
    let descripcion = 'Ícono de carrito de compras';

    return (
        <div>
            <img src={imagen} alt={descripcion} className= "img-fluid"/>
        </div>
    )
}
export default CartWidget;




