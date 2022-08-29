import './App.css';
import 'core-js/actual'; 
import Header from './assets/Header';
import Footer from './assets/Footer';
import NavBar from './assets/NavBar';

function App() {
  // let imagen = './assets/imagenes/ipad.jpg';
  // let titulo = "Ipad Air";
  // let slogan = "Potencia en todos sus colores.";
  // let description = "Con los superpoderes del chip M1 de Apple. Cámara frontal ultra gran angular de 12 MP con Encuadre Centrado. Funciona con el Apple Pencil y el Magic Keyboard. Cinco colores increíbles.";
  
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
      <Header />
      <h3>Nuestros productos</h3>
      <ul>
      {
        productos.map (item => (
          <li key={item.id}>{item.nombre} - {item.precio}</li>
        ))
      }
      </ul>
      {/* <div className="container">
      <div className="row">
        <div className='col-md-4 offset-md-2'>
          <img src={imagen} alt={titulo} className= "img-fluid"/>
          </div>

          <div className="col-md-4">
          <h1>{titulo}</h1>
          <h5>{slogan}</h5>
          <p>{description}</p>
          </div>
      </div>
    </div> */}
    <Footer />
    </div>
    
  );
}

// function App2(){
//   console.log(Array.from(new Set(1, 2, 3, 3, 2)));

//   return(
//     <div>

//     </div>
//   );
// }

export default App;
