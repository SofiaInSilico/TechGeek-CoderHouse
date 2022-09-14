import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
 
    const [items, setItems] = useState ([]);
    useEffect (() => { //state
        const productos = [
            { 'id': 1, 'nombre': "Ipad Air 4th generation", 'imagen': "https://cdn-ipoint.waugi.com.ar/20774-large_default/109-inch-ipad-air-wi-fi-64gb-space-gray.jpg", 'precio': "599 usd", 'descripcion': "El nuevo iPad Air es más versátil que nunca. La increíble pantalla Liquid Retina de 10,9 pulgadas con amplia gama de colores hace que las fotos, videos y juegos se vean con un nivel de detalle superior(1). El chip A14 Bionic con Neural Engine tiene potencia de sobra y capacidades avanzadas de aprendizaje automático para que puedas editar videos 4K, crear presentaciones inolvidables y diseñar modelos 3D con mucha facilidad. Además, el iPad Air ahora es compatible con el Magic Keyboard y el Apple Pencil (segunda generación)(2), y viene con TouchID: un sistema de autenticación rápido, sencillo y seguro. También incluye una cámara trasera de 12MP y una cámara FaceTime HD de 7 MP, un puerto USB-C para cargar el iPad Air y conectar accesorios y batería para todo el día(3). El iPadAir pone en tus manos toda la potencia que necesitas para dar vida a tus ideas."},
            { 'id': 2, 'nombre': "Iphone 11 Pro", 'imagen': "https://d500.epimg.net/cincodias/imagenes/2019/09/10/smartphones/1568121499_490816_1568143364_sumario_normal.jpg", 'precio': "480 usd", 'descripcion': "El Apple iPhone 11 Pro es el sucesor del iPhone Xs. Con una pantalla OLED Super Retina XDR, el iPhone 11 Pro está potenciado por un procesador A13 Bionic de Apple, con opciones de almacenamiento de 64GB, 256GB o 512GB. La cámara posterior del iPhpne 11 Pro es triple, de 12 MP + 12 MP + 12 MP, mientras que su cámara frontal también es de 12 MP. El iPhone 11 Pro también tiene parlantes stereo con sonido Dolby Atmos, batería con carga rápida e inalámbrica, resistencia al agua, desbloqueo facial Face ID, Apple Pay y corre iOS 13."},
            { 'id': 3, 'nombre': "Notebook Lenovo ThinkPad E14 2da Gen", 'imagen': "https://www.lenovo.com/medias/22tpe14e4n1.png?context=bWFzdGVyfHJvb3R8Mjk0MjQyfGltYWdlL3BuZ3xoZWYvaDY0LzE0MTExNzE4NDczNzU4LnBuZ3w3NzUyNzZlMGRiMDNhMjRiMGE3Mzc4MDFmMGZmMDU0ZTA5NzM2OTQyOWM5YmVkNzMwZDc5NmI3NDYyNTIxZWQz", 'precio': "450 usd", 'descripcion': "" },
            { 'id': 4, 'nombre': "Audífonos Razer Kraken", 'imagen': "https://http2.mlstatic.com/D_NQ_NP_835766-MLA32881918724_112019-V.jpg", 'precio': "50 usd", 'descripcion': "" },
            { 'id': 5, 'nombre': "Samsung Tab S7", 'imagen': "https://mejortablet.com/wp-content/uploads/2020/09/samsung_galaxy_tab_s7_01.jpg", 'precio': "250 usd", 'descripcion': "" }
        ];
        const getProd = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);  
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