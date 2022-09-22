import React from "react";
import { useState } from 'react';


const ItemCount = ({ stock, initial, onAdd }) => {

    const [cantidad, setCantidad] = useState(initial);

    const [fecha, setFecha] = useState(new Date());

    const addAmount = () => {
        cantidad <= stock && setCantidad(cantidad + 1);
    }
    const subtractAmount = () => {
        cantidad > stock && setCantidad(cantidad - 1);
    }

    const addToCart = () => {
        onAdd(cantidad);
    }

    return (

        <div>
            <div className='container py-2'>
                <div className='row'>
                    <div className='col-md-2'>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary" onClick={subtractAmount}>
                                -
                            </button>
                            <button type="text" className="btn btn-outline-primary">
                                {cantidad}
                            </button>
                            <button type="button" className="btn btn-outline-primary" onClick={addAmount}>
                                +
                            </button>
                        </div>
                        <div className='pt-2'>
                            <input className="btn btn-dark" type="submit" value="Agregar al carrito"
                                onClick={() => {
                                    addToCart()
                                    setFecha(new Date());
                                }} />
                        </div>

                    </div>
                </div>
            </div>
            {/* <p> Cantidad de productos agregados: {agregarProductos}</p> */}
            <p> Stock: {stock}</p>
            <p> Fecha: {fecha.getDate()}/{fecha.getMonth()}/{fecha.getFullYear()} 
            {fecha.getHours()}:{fecha.getMinutes()}:{fecha.getSeconds()}</p>
        </div>

    );
}


export default ItemCount;