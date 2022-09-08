import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row">
            {items.map(item => 
            (<div key={item.id} className="col-md-3 py-2">
                    <Item nombre={item.nombre} imagen={item.imagen} precio={item.precio} />
                </div>))}
        </div>
    )
}

export default ItemList;