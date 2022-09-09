
import './App.css';
import ColorSchemesExample from './components/barra/barra';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/index';
import React from 'react';
import ItemDetailContainer from './components/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './components/carrito/carrito.jsx'
import Turnos from './components/turnos/index'
import Contacto from './components/contacto/index';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <ColorSchemesExample></ColorSchemesExample>
        <Routes>
          <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/productos/:' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/carrito' element={<CartWidget></CartWidget>}></Route>
          <Route path='/detalle' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='/turnos' element={<Turnos></Turnos>}></Route>
          <Route path='/contacto' element={<Contacto></Contacto>}></Route>
        </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
