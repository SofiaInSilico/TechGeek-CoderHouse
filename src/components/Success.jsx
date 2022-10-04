import React from "react";
import Check from "../assets/imagenes/done2.png";

const Success = ({id}) => {

    return (
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <p><img src={Check} alt="TechGeek" width="180" /></p>
                <p className="color">La Orden de compra ha sido generada. Su código de compra es: <b>{id}</b></p>
            </div>

        </div>
    )
}
export default Success;