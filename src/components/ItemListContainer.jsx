import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import ItemList from "./ItemList";
import { productos } from "./mock/productos";

const ItemListContainer = () => {
 
    const [items, setItems] = useState ([]);
    useEffect (() => {

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);  
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;