import React, { useState } from "react";
import "./producto-count.scss";

export default function ProductCount({
  onAddCantidad,
  onChangeStock,
  stock = 5,
  cantidad = 0,
}) {
  const [cant, setCant] = useState(cantidad);

  const handleCant = {
    agregar: () => {
      if (stock !== 0) {
        setCant(cant + 1);
        onAddCantidad(cant + 1);
      }
    },
    restar: () => {
      if (cant > 0) {
        setCant(cant - 1);
        onAddCantidad(cant - 1);
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
          <p>+</p>
        </button>
        <span className="number">{cant}</span>
        <button
          type="button"
          disabled={cant === 0}
          className="button-count minus"
          onClick={handleCant.restar}
        >
          <p>-</p>
        </button>
      </div>
    </>
  );
}
