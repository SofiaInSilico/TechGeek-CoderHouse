import React from 'react';
import ItemDCard from './ItemDCard';

const ItemDetail = ({ items }) => {
  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-md-3 py-2">
          <ItemDCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;
