import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import ItemList from "./ItemList";
import { productos } from "./mock/productos";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const getProductos = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });

    useEffect(() => {
        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return (
        <>
        {
            items &&
        <div className="container">
            <ItemList items={items} />
        </div>
        }
        </>
    )
}

export default ItemListContainer;