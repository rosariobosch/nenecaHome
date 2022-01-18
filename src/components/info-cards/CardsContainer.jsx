import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./info-card.scss";
import InfoCard from "./InfoCard";
import contact from "../../assets/infoCards/contact.png";
import envios from "../../assets/infoCards/envios.png";
import materials from "../../assets/infoCards/materials.png";
import payments from "../../assets/infoCards/payments.png";

export default function CardsContainer() {
  const sliderSettings = {
    speed: 500,
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 0,
    dots: false,
    responsive: [
      {
        centerMode: true,
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        centerMode: true,
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="cards-container">
      <Slider {...sliderSettings}>
        <InfoCard
          img={materials}
          title="Hecho a mano"
          description="Materiales de calidad"
        ></InfoCard>
        <InfoCard
          img={payments}
          title="Métodos de pago"
          description="Efectivo o transferencia"
        ></InfoCard>
        <InfoCard
          img={envios}
          title="Envío o retiro"
          description="A acordar"
        ></InfoCard>
        <InfoCard
          img={contact}
          title="Contacto"
          description="Por Whatsapp o Instagram"
        ></InfoCard>
      </Slider>
    </div>
  );
}
