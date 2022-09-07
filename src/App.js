import './App.css';
import 'core-js/actual'; 
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function enviaMensaje (){
  console.log('Botón clickeado');
}

const SuperButton = () => {
  return (
    <input type='button' value='Soy un botón! clickéame!' onClick={enviaMensaje} />
  )
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
      <ItemListContainer greeting='Platafoma de venta de productos tecnológicos'/>
      <SuperButton />
      <h3>Nuestros productos</h3>
      <ul>
      {
        productos.map (item => (
          <li key={item.id}>{item.nombre} - {item.precio}</li>
        ))
      }
      </ul>

    <Footer />
    </div>
    
  );
}



export default App;
