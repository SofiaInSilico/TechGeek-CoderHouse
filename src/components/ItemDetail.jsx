import React from 'react';
import ItemCount from './ItemCount';
import { CartContext } from './context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const ItemDetail = ({ item }) => {

    const [count, setCount] = useState(0);
    const {cart, setCart, addToCart, clear} = useContext(CartContext);

    const onAdd = (count) => {
        setCount(count);
        addToCart(item, count);
        // console.log (cantidad);
    }


    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" alt={item.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">$ {item.price}</p>
                        <p className="card-text">{item.description}</p>
                    </div>
                    {count === 0 ? (
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />) :
                        (<Link to="/cart">Ir al carrito</Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
