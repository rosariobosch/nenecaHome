import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./footer.scss";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <footer>
      <div className="container">
        <p
          onClick={() => {
            handleScrollToTop();
          }}
        >
          <AiOutlineArrowUp /> Volver arriba
        </p>
        <div className="row">
          <div className="col">
            <h3>Neneca Home</h3>
            <h4>
              <a href="https://www.instagram.com/nenecahomedeco/">
                <FaInstagram /> @nenecahomedeco
              </a>
            </h4>
            <h4>
              <BiMap /> San Fernando, Buenos Aires
            </h4>
            <h4>
              <a href="tel:+5491144015529">
                <FiPhone />
                +54 9 11 4401 5529
              </a>
            </h4>
            <h4>
              <a href="tel:+5491144742958">
                <FiPhone />
                +54 9 11 4474 2958
              </a>
            </h4>
            <h4>www.nenecahome.com</h4>
          </div>
          <div className="col col-menu">
            <h3>Menú</h3>
            <h4>Productos</h4>
            <h4>Preguntas frecuentes</h4>
            <h4>Clientas felices</h4>
            <h4>Sobre nosotras</h4>
            <h4>Mis pedidos</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
