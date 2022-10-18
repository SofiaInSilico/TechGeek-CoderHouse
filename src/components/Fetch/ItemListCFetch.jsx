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
        setItems(data.results);
      });

  }, []);

  return (
    <div className="container">
      <h3 className='color margen'>También te podría interesar:</h3>
      <ItemListFetch items={items} />
    </div>
  );
};

export default ItemListCFetch;