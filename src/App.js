
import './App.css';
import ColorSchemesExample from './components/barra/barra';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/index';
import React from 'react';
import ItemDetailContainer from './components/itemDetailContainer';

function App() {
  return (
    <>
    
    
    <div className="App">
      <header>
        <ColorSchemesExample></ColorSchemesExample>
        
          <ItemListContainer></ItemListContainer>
          
          <ItemDetailContainer></ItemDetailContainer>
         
      </header>
    </div>

   
    </>
  );
}

export default App;
