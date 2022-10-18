import React from "react";
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, imagen, precio, descripcion }) => {
    return (
        <div class="row row-cols-1 row-cols-md-1 g-3 container-fluid text-white">
            <div class="col" >
                <div class="card h-100 cardBackground">
                    <div id="a">
                    <img src={imagen} className="card-img-top remove-bg" height="200px" alt={nombre} />
                    </div>
                    <div class="card-body">
                        <h5 className="card-title text-center">{nombre}</h5>
                        <p className="card-text text-center">$ {precio} USD</p>
                        <p className="card-text text-start"> {descripcion}</p>
                        <Link to={`/item/${id}`} className="btn btn-dark userLink ">Ver más</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Item;

