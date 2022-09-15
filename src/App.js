import './App.css';
import 'core-js/actual';
import { Routes, Route } from 'react-router-dom';
// import Inicio from './components/Inicio';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ImgInicial from './components/ImgInicial';
import ItemListCFetch from './components/Fetch/ItemListCFetch';


function App() {
  return (
    <>
      <NavBar />
      <ImgInicial />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/category/:id' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
      <h3 className='color margen'>Mira también:</h3>
      <ItemListCFetch />
      <Footer />
    </>
  );
}

export default App;
