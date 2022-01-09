import React from "react";
import Slider from "react-slick";
import imgAboutUs from "../../assets/sobre-nosotras.png";
import ClientCard from "./clients/ClientCard";
import "./aboutUs.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutUs() {
  const sliderSettings = {
    speed: 500,
    infinite: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="about-us">
      <div className="container">
        <div className="img">
          <img src={imgAboutUs} alt="Nosotras" />
        </div>
        <div className="information">
          <h2>Conocé un poco sobre nosotras y nuestra historia</h2>
          <p className="information__first-p">
            Somos Manu y Barbi, muy distintas pero muy amigas.. y en algo
            coincidimos plenamente: nos declaramos apasionadas por nuestros
            hogares!
            <br />
            Por eso en 2020 y con la necesidad de quedarse “en casa” quisimos
            sacar lo mejor de esa circunstancia y potenciar nuestro hogar con
            productos que nos permitieran disfrutar de cada rincón dándole
            armonía y calidez.. y por qué no compartir nuestra pasión con
            otros?!
            <br />
            Así nació Neneca Home, explorando géneros de telas, fibras naturales
            y la cera de soja que nos llevó a descubrir un mundo de aromas que
            seguimos investigando..
            <br />
            <span>
              Gracias por entrar a nuestro mundo! Aquí se los compartimos!
            </span>
          </p>
          <h3>¿Por qué Neneca?</h3>
          <p className="information__second-p">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim. Elit aute irure tempor
            cupidatat incididunt sint deserunt ut voluptate aute id deserunt
            nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
            Sunt qui esse pariatur duis deserunt mollit dolore cillum minim{" "}
          </p>
          <div className="clients-cards">
            <h2>Lo que dicen nuestros clientes</h2>
            <div className="clients-cards__container">
              <Slider {...sliderSettings}>
                <ClientCard
                  text="Gracias, ya son parte de mi casa"
                  person="Flor"
                />
                <ClientCard
                  text="Gracias, ya son parte de mi casa"
                  person="Flor"
                />
                <ClientCard
                  text="Gracias, ya son parte de mi casa"
                  person="Flor"
                />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
