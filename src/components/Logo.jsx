import React from "react";
import imagen from "../assets/imagenes/logonegro.png";


const Logo  = () => {
    let descripcion = 'logo';
    
    return (
        <div>
            <img src={imagen} alt={descripcion} styles={'max-widht:30px'}/>
        </div>
    )
}
export default Logo;