import React, { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import ProductCount from "../../producto/ficha-de-producto/product-count/ProductCount";
import { CartContext } from "../../context/CartContext";
import "./cart-product.scss";
import CurrencyFormat from "react-currency-format";

export default function CartProduct(props) {
  const { id, precio, cantidad, image, nombre, variacion } = props.producto;

  const cartContext = useContext(CartContext);

  const handleDeleteEvent = () =>
    cartContext.removeProduct(id, precio, cantidad);

  return (
    <>
      <div className="product-cart-container">
        <div className="product-cart-container__image">
          <img
            src={`data:image/${image.contentType};base64,${image.data}`}
            alt="producto"
          />
        </div>
        <div className="product-cart-container__info">
          <h2>{nombre}</h2>
          <h4>{`Edicion: ${nombre} ${variacion}`}</h4>
          <div className="remove">
            <BsTrash onClick={handleDeleteEvent} className="remove__item" />
          </div>
          <div className="cant-price">
            <ProductCount cantidad={cantidad} />
            <CurrencyFormat
              className="cant-price__price"
              value={precio}
              thousandSeparator="."
              decimalSeparator=","
              displayType={"text"}
              prefix={"$"}
            ></CurrencyFormat>
          </div>
        </div>
      </div>
    </>
  );
}
