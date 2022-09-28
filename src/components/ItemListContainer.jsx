import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import ItemList from "./ItemList";
// import Loading from "./Loading";
import { productos } from "./mock/productos";
// import { useContext } from "react";

const ItemListContainer = () => {
    // const {setLoading} = useContext(Loading);
    const [items, setItems] = useState([]);

    const getProductos = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });

    useEffect(() => {
        getProductos.then((respuesta) => {
            setItems(respuesta);
            // setLoading(false);
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