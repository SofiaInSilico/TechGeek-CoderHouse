import React from "react";
import {Link} from 'react-router-dom';

const Item = ({id, nombre, imagen, precio, descripcion}) => {
    return (
        <div className='card'>
            <div className="card border-dark mb-3" styles="width: 18rem;">
                <img src={imagen} className="card-img-top" alt={nombre} />
                    <div className="card-body">
                        <h5 className="card-title text-center">{nombre}</h5>
                        <p className="card-text text-center">$ {precio}</p>
                        <p className="card-text text-start"> {descripcion}</p>
                        <Link to={`/item/${id}`} className="btn btn-dark userLink">Ver más</Link>
                        {/* <a href="#" className="btn btn-primary">Agregar al carrito</a> ----- juntar esto con el button contador*/}
                    </div>
            </div>
        </div>
    );
}
export default Item;