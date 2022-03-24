import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBarComponent';
import ItemListContainer from './containers/ItemListContainerComponent';




function App() {

  const saludo = "Bienvenido querido";

  return (
    
    <div>
    <NavBar/>
    <ItemListContainer greeting={saludo}/>
    </div>

    
  );
}

export default App;
