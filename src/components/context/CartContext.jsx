import React, { useState, createContext, useContext } from "react";
// import { Notyf } from "notyf";

export const CartContext = createContext();

const CartState = (props) => {
  const [productsCart, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // const notyf = new Notyf();

  //precio, id, cantidad
  const addProduct = ({ id, precio, cantidad }) => {
    let productInCart = isInCart(id);
    if (!productInCart) {
      setProducts((productsBefore) => [
        ...productsBefore,
        { id, precio, cantidad },
      ]);
      setTotalPrice((prev) => prev + precio * cantidad);
      // notyf.open({
      //   type: "success",
      //   message: "Producto agregado al carrito con éxito!",
      // });
    } else {
      const cartAux = productsCart.map((product) => {
        if (product.id === id) {
          setTotalPrice((prev) => prev - product.cantidad * precio);
          product.cantidad = cantidad;
        }
        return product;
      });
      setProducts(cartAux);
      // notyf.open({
      //   type: "warning",
      //   message: "Se actualizó la cantidad seleccionada",
      // });
      setTotalPrice((ant) => ant + precio * cantidad);
    }
  };

  const isInCart = (id) => productsCart.some((product) => product.id == id);

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
      value={{ productsCart, totalPrice, addProduct, clearCart, removeItem }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
