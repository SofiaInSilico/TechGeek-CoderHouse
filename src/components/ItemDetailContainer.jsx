import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { productos } from './mock/productos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const getItem = () =>
            new Promise((res, rej) => {
                const producto = productos.find((prod) => prod.id === 1)
                setTimeout(() => {
                    res(producto)
                }, 2000)
            })
        getItem()
            .then((respuesta) => {
                setItem(respuesta);
            })
            .catch((error) => {
                console.log(error);
            })

    }, []);

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;