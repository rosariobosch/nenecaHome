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
          disabled={cant === stock}
          className="button-count"
          onClick={handleCant.agregar}
        >
          +
        </button>
        <span className="number">{cant}</span>
        <button
          type="button"
          disabled={cant === 0}
          className="button-count"
          onClick={handleCant.restar}
        >
          -
        </button>
      </div>
    </>
  );
}
