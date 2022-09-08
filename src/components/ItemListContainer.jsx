import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
 
    const [items, setItems] = useState ([]);
    useEffect (() => { //state
        const productos = [
            { id: 1, nombre: "Ipad Air 4th generation", imagen: "", precio: "599 usd" },
            { id: 2, nombre: "Iphone 11", imagen: "", precio: "480 usd" },
            { id: 3, nombre: "Notebook Lenovo", imagen: "", precio: "450 usd" },
            { id: 4, nombre: "Audífonos Razer Kraken", imagen: "", precio: "50 usd" },
            { id: 5, nombre: "Tablet Samsung", imagen: "", precio: "250 usd" }
        ];
        const promesa = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        }); //se crea promesa
        
        promesa.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return (
        <div className="container">
            <ItemList items={items}/>
            
        </div>

    )
}

export default ItemListContainer;