import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="row">
            {items.map(item => <Item id={item.id} nombre={item.nombre} imagen={item.imagen} precio={item.precio} />)}
        </div>
    )
}
export default ItemList;