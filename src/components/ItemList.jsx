import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="row">
            {items.map
                (item => (<div key={item.id} className="col-md-3 py-2">
                    <Item id={item.id} nombre={item.title} imagen={item.img} precio={item.price} descripcion={item.descripcion}/>
                </div>))}
        </div>
    );
}

export default ItemList;