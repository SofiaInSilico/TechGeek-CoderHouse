import React from "react";
import imagen from "../assets/imagenes/TECH GEEK.png";


const Logo  = () => {
    let descripcion = 'logo';
    
    return (
        <div>
            <img src={imagen} alt={descripcion} />
        </div>
    )
}
export default Logo;