import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemListFetch from './ItemListFetch';

const ItemListCFetch = () => {
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
      <ItemListFetch items={items} />
    </div>
  );
};

export default ItemListCFetch;