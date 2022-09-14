import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=gamer&limit=20')
      .then((respuesta) => respuesta.json())
      .then((data) => {
        // console.log(data.results);
        setItems(data.results);
      });
      
  }, []);

  return (
    <div className="container">
      <ItemDetail items={items} />
    </div>
  );
};

export default ItemDetailContainer;