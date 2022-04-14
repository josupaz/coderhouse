import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import CartEmpty from './components/CartEmpty';
import PostOrder from './components/PostOrder';





function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path = '/' element = {<ItemListContainer/>}/>
    <Route path = '/postorder' element = {<PostOrder/>}/>
    <Route path = '/product/:id'  element = {<ItemDetailContainer/>} />
    <Route path = '/category/:id' element = {<ItemListContainer/>} />
    <Route path = '/cart'  element = {<Cart/>} />
    <Route path = '/cartempty'  element = {<CartEmpty/>} />
    <Route path = '*' element = {<NotFound/>} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
