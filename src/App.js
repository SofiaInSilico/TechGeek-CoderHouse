import './App.css';
import 'core-js/actual';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Inicio />} />
        {/* <Route exact path='/' element={<ItemListContainer />} /> */}
        <Route exact path='/category/:id' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />

      </Routes>
    </BrowserRouter>
  );
}


