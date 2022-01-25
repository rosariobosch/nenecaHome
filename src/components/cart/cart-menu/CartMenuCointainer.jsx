import React, { useState } from "react";
import Cart from "../Cart";
import { Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
import "./cart-menu-container.scss";

export default function CartContainer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas placement="end" name="end" show={show} onHide={handleClose}>
        <OffcanvasHeader closeButton className="titulo">
          Carrito de compras
        </OffcanvasHeader>
        <Offcanvas.Body>
          <Cart></Cart>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
