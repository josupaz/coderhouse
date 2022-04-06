import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import { getAllByAltText } from '@testing-library/react';




function App() {

  const category = {
    all : "all",
    men : "men's clothing",
    woman: "women's clothing",
    jewelery: "jewelery",
    electronics: "electronics"
  }
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path = '/' element = {<ItemListContainer category = {category.all}/>}/>
    <Route path = '/product/:id'  element = {<ItemDetailContainer/>} />
    <Route path = '/cart'  element = {<Cart/>} />
    <Route path = '/hombre'  element = {<ItemListContainer category = {category.men}/>} />
    <Route path = '/mujer'  element = {<ItemListContainer category = {category.woman}/>} />
    <Route path = '/joyas'  element = {<ItemListContainer category = {category.jewelery}/>} />
    <Route path = '/electronica'  element = {<ItemListContainer category = {category.electronics}/>} />
    <Route path = '*' element = {<NotFound/>} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
