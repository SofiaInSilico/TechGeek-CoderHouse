import React from 'react';
import ItemFetch from './ItemFetch';

const ItemDetail = ({ items }) => {
  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-md-3 py-2">
          <ItemFetch item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;
