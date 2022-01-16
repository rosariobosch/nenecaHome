import React, { useState, createContext, useContext } from "react";
import { Notyf } from "notyf";

export const CartContext = createContext();

const CartState = (props) => {
  const [productsCart, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const notyf = new Notyf();

  const addItem = (product, cantidad) => {
    // const { product } = product;
    const price = product.price;
    const idproduct = product.id;

    let productInCart = isInCart(idproduct);
    if (!productInCart) {
      setProducts((productsBefore) => [
        ...productsBefore,
        { product, cantidad },
      ]);
      setTotalPrice((prev) => prev + price * cantidad);
      notyf.open({
        type: "success",
        message: "Producto agregado al carrito con éxito!",
      });
    } else {
      const cartAux = productsCart.map((product) => {
        if (product.product.id === idproduct) {
          setTotalPrice((prev) => prev - product.cantidad * price);
          product.cantidad = cantidad;
        }
        return product;
      });
      setProducts(cartAux);
      notyf.open({
        type: "warning",
        message: "Se actualizó la cantidad seleccionada",
      });
      setTotalPrice((ant) => ant + price * cantidad);
    }
  };

  const isInCart = (id) =>
    productsCart.find((product) => product.product.id === id);

  const removeItem = (id, price, cantidad) => {
    let newArray = productsCart.filter((product) => product.product.id !== id);
    setProducts(newArray);
    setTotalPrice((prev) => prev - price * cantidad);
  };

  const clearCart = () => {
    setProducts([]);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider
      value={{ productsCart, totalPrice, addItem, clearCart, removeItem }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
