import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCount from "./product-count/ProductCount";
import "./product-detail-container.scss";

export default function ProductDetailContainer(props) {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [variaciones, setVariaciones] = useState([]);
  const [selectedVariation, setSelectedVariation] = useState(null);

  const id = "61e73ec2d6d7fd618af423be"; //reemplazar por get id del router

  useEffect(() => {
    async function fetchData() {
      const { data } = await getGeneralProductData();
      const { variaciones } = data;
      setProduct(data);
      setVariaciones(variaciones);
      setSelectedVariation(variaciones[0]); //Asigna primer variacion por default
      setLoading(false);
    }

    fetchData();
  }, []);

  const getGeneralProductData = async () => {
    const response = await fetch(
      `http://backend-neneca.glitch.me/api/v1/producto/obtener/${id}`
    );
    const data = await response.json();
    return data;
  };

  //VER COMO SACAR SLIDER SETTINGS PARA AFUERA DEL COMPONENTE

  // SLIDER SETTINGS
  const sliderSettings = {
    speed: 500,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log(nextSlide);
      const nextVariation = document.querySelector(
        `[data-index='${nextSlide}']`
      );

      const idNextVariation = nextVariation.children[0].children[0].id; //Ver si existe algun metodo mas facil para llegar al
      let currentVariation = variaciones.filter(
        (variacion) => variacion._id === idNextVariation
      );
      setSelectedVariation(currentVariation[0]);
    },
    afterChange: function () {},
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // centerMode: true,
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        // centerMode: true,
        breakpoint: 1024,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          // centerMode: true,
        },
      },
    ],
  };

  if (!loading) {
    console.log(selectedVariation);
  }
  // const {} = props;

  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div className="container container-fdp">
          <h2 className="title-mobile">{`${product.nombre} ${selectedVariation.nombre}`}</h2>
          <div className="col-images">
            <div className="slider-container">
              <Slider {...sliderSettings}>
                {variaciones.map((variacion) => {
                  return (
                    <img
                      className="slider-image"
                      key={variacion._id}
                      id={variacion._id}
                      alt={variacion.name}
                      src={`data:image/${variacion.image.contentType};base64,${variacion.image.data}`}
                    />
                  );
                })}
              </Slider>
            </div>
            <div className="image-principal">
              <img
                alt={selectedVariation.name}
                src={`data:image/${selectedVariation.image.contentType};base64,${selectedVariation.image.data}`}
              />
            </div>
          </div>

          <div className="col-buy-data">
            <h2 className="title-desktop">{`${product.nombre} ${selectedVariation.nombre}`}</h2>
            <h3>{selectedVariation.precio}</h3>
            <div className="selection">
              <ProductCount />
            </div>
            <div className="buttons">
              <button
                className="buyButton"
                //handleEvent={handleAddCart}
                //cant={cant}

                //disabled={cant === 0}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
          <p>{product.descripcion}</p>
        </div>
      )}
    </>
  );
}
