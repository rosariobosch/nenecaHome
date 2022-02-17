import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartProduct from "./cart-product/CartProduct";
import styles from "./cart.scss";
import CurrencyFormat from "react-currency-format";

const Cart = () => {
  const [scrollbar, setScrollbar] = useState(false);

  const { productsCart, totalPrice, removeItem, clearCart } =
    useContext(CartContext);
  const [finishBuy, setFinishBuy] = useState(false);

  useEffect(() => {
    // let scrollCart = document.querySelector(".cartProducts");
    // scrollCart.scrollHeight > scrollCart.clientHeight
    productsCart.length > 2 ? setScrollbar(true) : setScrollbar(false);
  }, [productsCart]);

  return (
    <div className={styles.cartContainer}>
      {!finishBuy && (
        <>
          {productsCart.length === 0 && (
            <div className={`${styles.container} ${styles.cartEmpty}`}>
              <h3>No ha agregado ninguna película al carrito aún.</h3>
              <Link to={"/"}>
                <Button variant="primary">Ir al inicio</Button>
              </Link>
            </div>
          )}
        </>
      )}

      {productsCart.length > 0 && (
        <>
          <div className={`cartProducts ${scrollbar ? "scroll" : ""}`}>
            {productsCart.map((product) => {
              return <CartProduct producto={product} key={product.id} />;
            })}
          </div>
          <div className="orderData">
            <div className="price">
              <h3>Total:</h3>
              <CurrencyFormat
                className="price__total"
                value={totalPrice}
                thousandSeparator="."
                decimalSeparator=","
                displayType={"text"}
                prefix={"$"}
              ></CurrencyFormat>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
