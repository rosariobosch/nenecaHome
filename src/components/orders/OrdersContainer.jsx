import React, { useState, useEffect } from "react";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import helperRequest from "../../services/api";
import incomplete from "../../assets/incompleto.png";
import inProcess from "../../assets/inProcess.png";
import complete from "../../assets/complete.png";
import "./orders-container.scss";

export default function OrdersContainer() {
  const [idOrder, setIdOrder] = useState("");
  const [status, setStatus] = useState("Completo");

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <h5>¡No te preocupes!</h5>
      <p>
        Al confirmar la compra te enviamos un email con el ID de la compra, solo
        hay que revisar tu casilla de emails y ¡Listo!
      </p>
    </Tooltip>
  );

  const submitProduct = async (e) => {
    e.preventDefault();
    const query = {
      id: e.target.orderId.value,
    };
    try {
      const response = await helperRequest(query, "obtenerOrden");
      console.log(response);
      // checkError(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="orders-container">
        <div className="orders-container__form">
          <h2>Consulta estado del pedido</h2>
          <p>
            Ingrese el N° de ID que le fue otorgado en el momento de la compra
            para consultar el estado de su pedido.
          </p>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400, delay: 5 }}
            overlay={renderTooltip}
          >
            <button className="overlay">No recuerdo mi ID</button>
          </OverlayTrigger>
          <form onSubmit={submitProduct}>
            <h3>ID Compra</h3>
            <div className="form-group">
              <input type="text" className="form-control" name="orderId" />
            </div>

            <Button variant="success" type="sumbite">
              Enviar
            </Button>
          </form>
        </div>

        <div className="orders-container__status mt-3">
          {!status && (
            <div className="orders-container__status-card">
              <h2>¡Enterate del estado de tu pedido en minutos!</h2>
              Aqui podrá encontrar información acerca del estado de su pedido.
              <ul>
                <li>
                  <span className="incomplete">INCOMPLETO</span>: Su orden aún
                  esta pendiente.
                </li>
                <li>
                  <span className="inProcess">EN PROCESO</span>: Su orden ya
                  esta en preparación.
                </li>
                <li>
                  <span className="complete">COMPLETO</span>: Su orden se
                  encuentra lista.
                </li>
              </ul>
            </div>
          )}

          {status === "Incompleto" && (
            <>
              <div className="orders-container__status__img">
                <img src={incomplete} alt="" />
              </div>
              <div className="orders-container__status-card">
                <h2>¡Estamos procesando su orden!</h2>
                <p>
                  Su pedido se encuentra en el listado de ordenes pendientes,
                  cuando esté en preparación su estado se actualizará
                  automaticamente.
                </p>
              </div>
            </>
          )}

          {status === "En proceso" && (
            <>
              <div className="orders-container__status__img">
                <img src={inProcess} alt="" />
              </div>
              <div className="orders-container__status-card">
                <h2>¡Manos a la obra!</h2>
                <p>
                  Su pedido se encuentra en preparación, cuando esté finalizado
                  su estado se actualizará automaticamente.
                </p>
              </div>
            </>
          )}

          {status === "Completo" && (
            <>
              <div className="orders-container__status__img">
                <img src={complete} alt="" />
              </div>
              <div className="orders-container__status-card">
                <h2>¡Su pedido está listo!</h2>
                <p>
                  Su pedido ya puede ser retirado o en caso de solicitar envío
                  será despachado en las proximas horas.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
