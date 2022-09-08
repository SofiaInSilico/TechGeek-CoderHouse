import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
 
    const [items, setItems] = useState ([]);
    useEffect (() => { //state
        const productos = [
            { 'id': 1, 'nombre': "Ipad Air 4th generation", 'imagen': "https://cdn-ipoint.waugi.com.ar/20774-large_default/109-inch-ipad-air-wi-fi-64gb-space-gray.jpg", 'precio': "599 usd" },
            { 'id': 2, 'nombre': "Iphone 11 Pro", 'imagen': "https://d500.epimg.net/cincodias/imagenes/2019/09/10/smartphones/1568121499_490816_1568143364_sumario_normal.jpg", 'precio': "480 usd" },
            { 'id': 3, 'nombre': "Notebook Lenovo ThinkPad E14 2da Gen", 'imagen': "https://www.lenovo.com/medias/22tpe14e4n1.png?context=bWFzdGVyfHJvb3R8Mjk0MjQyfGltYWdlL3BuZ3xoZWYvaDY0LzE0MTExNzE4NDczNzU4LnBuZ3w3NzUyNzZlMGRiMDNhMjRiMGE3Mzc4MDFmMGZmMDU0ZTA5NzM2OTQyOWM5YmVkNzMwZDc5NmI3NDYyNTIxZWQz", 'precio': "450 usd" },
            { 'id': 4, 'nombre': "Audífonos Razer Kraken", 'imagen': "https://http2.mlstatic.com/D_NQ_NP_835766-MLA32881918724_112019-V.jpg", 'precio': "50 usd" },
            { 'id': 5, 'nombre': "Samsung Tab S7", 'imagen': "https://mejortablet.com/wp-content/uploads/2020/09/samsung_galaxy_tab_s7_01.jpg", 'precio': "250 usd" }
        ];
        const getProd = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);  //después de los dos segundos, se va a blanco -> ItemList parece tener un problema, pero no lo logro encontrar!
        });

        getProd.then((respuesta) => {
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