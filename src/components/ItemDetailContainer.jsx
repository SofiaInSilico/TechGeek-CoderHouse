import React from 'react';
import { useEffect, useState } from 'react';
import { productos } from './mock/productos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const { id } = useParams();

    const getItem = (id) =>
        new Promise((resolve, reject) => {
            const producto = (productos.find((prod) => prod.id === Number(id)))
            setTimeout(() => {
                resolve(producto);
            }, 2000);
        });

    useEffect(() => {
        getItem()
            .then((response) => {
                setItem(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;