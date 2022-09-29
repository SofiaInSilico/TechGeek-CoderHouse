import React from "react";
import Logo from "../assets/imagenes/logonegro.png";


const Loading = () => {
    return (
        <div className="row" role="status">
            <div className="col-md-12 text-center p-5">
                <p><img src={Logo} alt="Tech Geek" width="180" /></p>
                <h3 className='color'>Cargando...</h3>
            </div>
        </div>
    )
}
export default Loading;