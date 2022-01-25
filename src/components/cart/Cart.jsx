import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartProduct from "./cart-product/CartProduct";
import styles from "./cart.scss";

const Cart = () => {
  const { productsCart, totalPrice, removeItem, clearCart } =
    useContext(CartContext);
  const [finishBuy, setFinishBuy] = useState(false);

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
      {productsCart.map((product) => {
        return <CartProduct producto={product} key={product.id} />;
      })}

      {/* <CartProductContainer products={productsCart} /> */}

      {/* 
          {productsCart.length !== 0 && (
            <>
              {/* <ItemCartList films={productsCart} onDelete={handleDeleteEvent} /> }
              <div className={`${styles.totalMount} ${styles.container}`}>
                <h4>Monto total: {totalPrice}</h4>
                <Button
                  variant="success"
                  onClick={() => {
                    setFinishBuy(true);
                  }}
                >
                  Finalizar compra
                </Button>
                <Button
                  className={styles.topButton}
                  variant="danger"
                  onClick={() => clearCart()}
                >
                  Vaciar carrito
                </Button>
                <Link to={"/"}>
                  <Button
                    className={`${styles.topButton} ${styles.topButtonInicio}`}
                    variant="primary"
                  >
                    Ver más películas
                  </Button>
                </Link>
              </div>
            </>
          )} */}
    </div>
  );
};

export default Cart;
