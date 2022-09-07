import React from "react";
import { useState } from 'react';


// function enviaMensaje() {
//     console.log('Botón clickeado');
//   }

const ItemCount = ({ stock, initial, onAdd }) => {
    const [stockProducto, setStockProducto] = useState(stock);
    const [cantidad, setCantidad] = useState(initial);
    const [addProducto, setAddProducto] = useState(onAdd);

    const [fecha, setFecha] = useState(new Date());
    const subtractAmount = (valor) => {
       if (valor > -1) {
        setCantidad(valor);
       }

    }

    const addAmount = (valor) => {
        if (valor <= stockProducto) {setCantidad(valor);}
    }

    return (

        <div>
            <div className='container py-2'>
                <div className='row'>
                    <div className='col-md-2'>
                        <p className='text-center'>Producto</p>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary" onClick={() => 
                            {subtractAmount(cantidad - 1)}}>-</button>
                            <button type="text" className="btn btn-outline-primary">{cantidad}</button>
                            <button type="button" className="btn btn-outline-primary" onClick={() => 
                                {addAmount(cantidad + 1)}}>+</button>
                        </div>
                        <div className='pt-2'>
                            <input className="btn btn-dark" type="submit" value="Agregar al carrito" onClick={() => {
                                setFecha(new Date());
                            }} />
                        </div>
                        
                    </div>
                </div>
            </div>
            <p>Stock: {stockProducto}</p>
            <p>Cantidad de productos agregados: {addProducto}</p>
            <p> Fecha : {fecha.getDate()}/{fecha.getMonth()}/{fecha.getFullYear()}  {fecha.getHours()}:{fecha.getMinutes()}:{fecha.getSeconds()}</p>
        </div>

    );
}


export default ItemCount;