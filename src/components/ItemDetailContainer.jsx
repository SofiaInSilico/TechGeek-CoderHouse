import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { productos } from './mock/productos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const {id} = useParams();
    
    useEffect(() => {
        const getItem = (id) => {
           return new Promise((resolve) => {
                const producto = (productos.find(prod => prod.id === id))
                setTimeout(() => {
                    resolve(producto)
                }, 2000)
            })}
            
            getItem(id).then((respuesta) => {
                setItem(respuesta)
            })
    });

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;