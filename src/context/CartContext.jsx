import {createContext, useState} from 'react';

export const Cart = createContext();

const CartContext = ({children}) => {


    const [cart, setCart] = useState([]);

    const addItem = (product, quantityToAdd) => {

        const producto = isInCart(product);
        if (producto) {
            producto.quantity += quantityToAdd;
            const cartFiltrado = cart.filter(elemento => elemento.id !== producto.id);
            cartFiltrado.push(producto);
            setCart(cartFiltrado);
            //Deberíamos agregar la cantidad al producto existente
        } else {
            //Agregamos un nuevo objeto al carrito
            setCart([...cart, { ...product, quantity: quantityToAdd }]);
        }

    }
    //Función auxiliar que me determina si el producto está o no en el cart por ID
    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id);
    }

    //limpia todo el carrito
    const clear = () => {
        cart.clear();
    }

    //elimina item del carrito
    const removeItem = (producto) =>{
        if(isInCart(producto))
        {   // esto no funciona
            //cart.delete(producto);
        }
    } 

    return (
        <Cart.Provider value = {{
            addItem
        }}>
            {children}
        </Cart.Provider>
    )
}

export default CartContext;

