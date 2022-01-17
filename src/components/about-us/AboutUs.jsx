import React from "react";
import imgAboutUs from "../../assets/sobre-nosotras.png";
import "./aboutUs.scss";

export default function AboutUs() {
  return (
    <div id="about-us">
      <div className="img__container">
        <div className="img" alt="Nosotras" />
      </div>
      <div className="container">
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
        </div>
      </div>
    </div>
  );
}
