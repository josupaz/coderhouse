import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NotFound from './components/NotFound';
import Cart from './components/Cart';





function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path = '/' element = {<ItemListContainer/>}/>
    <Route path = '/product/:id'  element = {<ItemDetailContainer/>} />
    <Route path = '/cart'  element = {<Cart/>} />
    <Route path = '*' element = {<NotFound/>} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
