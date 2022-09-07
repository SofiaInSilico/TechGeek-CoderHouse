import './App.css';
import 'core-js/actual';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { useState } from 'react';



const Precios = () => {
  const [precio, setPrecio] = useState('inicial: 599 usd');
  return (
    <div onClick={() => { setPrecio('en oferta!: 500 usd') }}>
      <h1> Imperdibles!</h1>
      <h3> Ipad Air</h3>
      <p>Clickea el precio y verás nuestras ofertas!</p>
      <h5> Precio {precio}</h5>
    </div>
  );
}



function App() {

  const productos = [
    { id: 1, nombre: "Ipad Air", precio: "599 usd" },
    { id: 2, nombre: "Iphone 11", precio: "480 usd" },
    { id: 3, nombre: "Notebook Lenovo", precio: "450 usd" },
    { id: 4, nombre: "Audífonos Razer Kraken", precio: "50 usd" },
    { id: 5, nombre: "Tablet Samsung", precio: "250 usd" },
  ]
  return (
    <div>
      <NavBar />
      <br />
      <ItemListContainer greeting='Platafoma de venta de productos tecnológicos' />
      <br />
      <ItemCount />
      <h3>Nuestros productos</h3>
      <ul>
        {
          productos.map(item => (
            <li key={item.id}>{item.nombre} - {item.precio}</li>
          ))
        }
      </ul>
      <br />
      <Precios />
      <br />
      <Footer />
    </div>

  );
}



export default App;
