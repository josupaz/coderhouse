import { createContext, useState } from "react";

export const Shop = createContext();

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantityToAdd) => {
    const producto = isInCart(product);
    if (producto) {
      producto.quantity += quantityToAdd;
      const cartFiltrado = cart.filter(
        (elemento) => elemento.id !== producto.id
      );
      cartFiltrado.push(producto);
      setCart(cartFiltrado);
      //Deberíamos agregar la cantidad al producto existente
    } else {
      //Agregamos un nuevo objeto al carrito
      setCart([...cart, { ...product, quantity: quantityToAdd }]);
    }
  };
  //Función auxiliar que me determina si el producto está o no en el cart por ID
  const isInCart = (producto) => {
    return cart.find((elemento) => elemento.id === producto.id);
  };

  //limpia todo el carrito
  const clear = () => {
    setCart([]);
  };

  //elimina item del carrito
  const deleteProduct = (producto) => {

    if (isInCart(producto)) {
      let index = cart.indexOf(producto);
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
    return setCart(updatedCart);
    }
  };

  const sumaTotal = () => {
    const suma = cart.reduce(
      (acc, item) => (acc += item.price * item.quantity),
      0
    );
    return suma;
  };

  return (
    <Shop.Provider
      value={{
        addItem,
        deleteProduct,
        sumaTotal,
        cart,
        clear,
      }}
    >
      {children}
    </Shop.Provider>
  );
};

export default ShopProvider;
