import React from "react";

const ItemFetch = ({item}) => {
    return (
    <div className="card">
                <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">${item.price}</p>
                        <a href={item.permalink} className="btn btn-dark" target='_blank'>Ver más</a>
                    </div>
            </div>
            );
};

export default ItemFetch;