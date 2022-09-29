import './App.css';
import 'core-js/actual';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import CartProvider from './components/context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
// import Loading from './components/Loading';
// import { useState, useEffect } from 'react';

function App() {

  return (
    <>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Inicio />} />
          <Route exact path='/items' element={<ItemListContainer />} />
          <Route exact path='/category/:id' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
