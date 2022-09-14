import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row">
            {items.map 
            (item => (<div key={item.id} className="col-md-5 py-3">
                    <Item nombre={item.title} imagen={item.img} precio={item.price} descripcion={item.description}/>
                </div>))}
        </div>
    );
}

export default ItemList;