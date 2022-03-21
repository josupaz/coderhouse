import './App.css';
import ComponenteA from './components/ComponenteA';



function App() {

  const name = "josu";

  return (
    <div>
    <h2>Hola Mundo!</h2>
    <ComponenteA lastName={name}/>
    </div>
  );
}

export default App;
