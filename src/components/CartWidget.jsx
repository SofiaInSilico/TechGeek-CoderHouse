import React from "react";


const CartWidget  = () => {
    let descripcion = 'Ícono';
    let imagen = "./src/assets/imagenes/iconocart.png";

    return (
        <div>
            <img src={imagen} alt={descripcion} className= "img-fluid"/>
        </div>
    )
}
export default CartWidget;




