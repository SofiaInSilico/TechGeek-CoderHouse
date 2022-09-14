import './App.css';
import 'core-js/actual';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
// import { useState } from 'react';
import ImgInicial from './components/ImgInicial';
import ItemDetailContainer from './components/ItemDetailContainer';



// const Precios = () => {
//   const [precio, setPrecio] = useState('inicial: 599 usd');
//   return (
//     <div className='color' onClick={() => { setPrecio('en oferta!: 500 usd') }}>
//       <h1> Imperdibles!</h1>
//       <p>Clickea el precio y verás nuestras ofertas!</p>
//       <h4> Ipad Air</h4>
//       <h5> Precio {precio}</h5>
//     </div>
//   );
// }



function App() {

  
  return (
    <div>
      <NavBar />
      <ImgInicial />
      <br />
      <h3 className='color margen'>Nuestros productos</h3>
      <br />
      {/* <Precios /> */}
      <ItemDetailContainer />
      <ItemListContainer />
      <ItemCount stock= {10} initial={1} onAdd={0}/>
      <Footer />
    </div>

  );
}



export default App;
