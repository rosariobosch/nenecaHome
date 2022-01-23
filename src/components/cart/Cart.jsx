import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import styles from "./cart.scss";
import { useState } from "react";
// import PaymentForm from "./PaymentForm/PaymentForm";

const CartContainer = () => {
  const { productsCart, totalPrice, removeItem, clearCart } =
    useContext(CartContext);
  const [finishBuy, setFinishBuy] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  const handleDeleteEvent = (id, price, cantidad) =>
    removeItem(id, price, cantidad);

  const handlePaymentDone = () => {
    setPaymentDone(true);
    clearCart();
  };

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

          {productsCart.length !== 0 && (
            <>
              {/* <ItemCartList films={productsCart} onDelete={handleDeleteEvent} /> */}
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
          )}
        </>
      )}
    </div>
  );
};

export default CartContainer;
