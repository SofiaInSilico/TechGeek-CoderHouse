import './App.css';
import 'core-js/actual';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ImgInicial from './components/ImgInicial';
import ItemListCFetch from './components/Fetch/ItemListCFetch';
import CartProvider from './components/context/CartContext';

function App() {


  return (
    <>
      <CartProvider>
        <NavBar />
        <ImgInicial />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/category/:id' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          {/* <Route path="/cart" element = {<Cart />} /> */}
        </Routes>
        <h3 className='color margen'>También te podría interesar:</h3>
        <ItemListCFetch />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
