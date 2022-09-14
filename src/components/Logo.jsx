import React from "react";
import imagen from "../assets/imagenes/HITECH.png";


const Logo  = () => {
    let descripcion = 'logo';
    
    return (
        <div>
            <img src={imagen} alt={descripcion} />
        </div>
    )
}
export default Logo;