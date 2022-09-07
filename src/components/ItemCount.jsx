import React from "react";
import { useState } from 'react';


// function enviaMensaje() {
//     console.log('Botón clickeado');
//   }

const ItemCount = () => {
    const [clicks, setClicks] = useState(0);
    const [fecha, setFecha] = useState(new Date());
  
    return (
      <div>
        <h3>Contador de clicks</h3>
        <input type='button' value='Soy un botón! clickéame!' onClick={() => {
            setClicks(clicks + 1);
            setFecha(new Date());
        }} />
        <p> Clicks : {clicks} - Fecha : {fecha.getDate()}/{fecha.getMonth()}/{fecha.getFullYear()}  {fecha.getHours()}:{fecha.getMinutes()}:{fecha.getSeconds()}</p>
      </div>
  
    );
  }


export default ItemCount;