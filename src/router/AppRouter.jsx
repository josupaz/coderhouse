import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Cart from '../shop/components/Cart'
import CartEmpty from '../shop/components/CartEmpty'
import NavBar from '../shop/components/NavBar'
import NotFound from '../shop/components/NotFound'
import PostOrder from '../shop/components/PostOrder'
import ItemDetailContainer from '../shop/containers/ItemDetailContainer'
import ItemListContainer from '../shop/containers/ItemListContainer'

export const AppRouter = () => {
  return (
    <>
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
    </>
  )
}
