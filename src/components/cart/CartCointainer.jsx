import React, { useState } from "react";
import Cart from "../cart/Cart";
import { Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./cart-container.scss";

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
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Cart></Cart>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
