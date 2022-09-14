import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
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
                    <ItemCount stock={15} initial={1} onAdd={0}/>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
