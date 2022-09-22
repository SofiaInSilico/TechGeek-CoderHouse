import React, { createContext } from 'react';
import { useEffect, useState } from 'react';
import { productos } from './mock/productos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
// import { CartContext } from './context/CartContext';
// import { useContext } from 'react';

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState();
    // const valores = useContext(CartContext);
    // const {cart} = useContext(CartContext) ;
    // console.log(valores.cart.map((valor) => console.log(valor)));

    const { id } = useParams();

    const getItem = (id) =>
        new Promise((resolve, reject) => {
            const producto = (productos.find((prod) => prod.id === Number(id)))
            setTimeout(() => {
                resolve(producto);
            }, 2000);
        });

    useEffect(() => {
        getItem(id)
            .then((response) => {
                setItem(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    return (
        <>
            {
                item &&
                <div className="container">
                    {/* <h2 onClick = {valores.cart}>{valores.cart}</h2> */}
                    <ItemDetail item={item} />
                </div>
            }
        </>

    );
};

export default ItemDetailContainer;