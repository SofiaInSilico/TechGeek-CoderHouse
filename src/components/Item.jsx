import React from "react";

const Item = ({nombre, imagen, precio}) => {
    return (
        <div className='col-md-3 py-2'>
            <div className="card border-dark mb-3" style="width: 18rem;">
                <img src={imagen} className="card-img-top" alt={nombre} />
                    <div className="card-body">
                        <h5 className="card-title text-center">{nombre}</h5>
                        <p className="card-text text-center">$ {precio}</p>
                        {/* <a href="#" className="btn btn-primary">Agregar al carrito</a> ----- juntar esto con el button contador*/}
                    </div>
            </div>
        </div>
    );
}
export default Item;