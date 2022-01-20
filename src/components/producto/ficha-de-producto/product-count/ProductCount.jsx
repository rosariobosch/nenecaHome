import React, { useState } from "react";
import "./producto-count.scss";

export default function ProductCount(onAddItem, onChangeStock, stock = 5) {
  const [cant, setCant] = useState(0);

  const handleCant = {
    agregar: () => {
      if (stock !== 0) {
        setCant(cant + 1);
        // onChangeStock(stock - 1);
      }
    },
    restar: () => {
      if (cant > 0) {
        setCant(cant - 1);
        // onChangeStock(stock + 1);
      }
    },
  };

  const handleAddCart = () => {
    // onAddItem(product, cant);
  };

  return (
    <>
      <div className="buttonsContainer">
        <button
          type="button"
          disabled={cant === 0}
          className="button-count"
          onClick={handleCant.restar}
        >
          -
        </button>
        <span className="cardTitle me-3 ms-3">{cant}</span>
        <button
          type="button"
          disabled={cant === stock}
          className="button-count"
          onClick={handleCant.agregar}
        >
          +
        </button>
      </div>
      <div className={"card__button"}>
        {/* <ButtonItemCart
          handleEvent={handleAddCart}
          cant={cant}
          text={"Agregar al carrito"}
          disabled={cant === 0}
          className="buyButton"
        /> */}
      </div>
    </>
  );
}
