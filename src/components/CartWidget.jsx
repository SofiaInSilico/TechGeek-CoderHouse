import React from "react";
import imagen from "../assets/imagenes/iconocart.png";


const CartWidget = () => {
    let descripcion = 'Ícono';

    return (
        <div>
            <img src={imagen} alt={descripcion} className="img-fluid" />
        </div>
    )
}
export default CartWidget;




