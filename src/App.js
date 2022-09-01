import logo from './logo.svg';
import './App.css';
import ColorSchemesExample from './components/barra/barra';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/index';

function App() {
  return (
    <>
    
    
    <div className="App">
      <header>
        <ColorSchemesExample></ColorSchemesExample>
        
          <ItemListContainer></ItemListContainer>
          
         
      </header>
    </div>

   
    </>
  );
}

export default App;
