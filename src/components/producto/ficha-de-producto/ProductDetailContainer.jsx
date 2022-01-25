import React, { useEffect, useRef, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCount from "./product-count/ProductCount";
import "./product-detail-container.scss";
import { CartContext } from "../../context/CartContext";
import CartContainer from "../../cart/cart-menu/CartMenuCointainer";
import CurrencyFormat from "react-currency-format";

export default function ProductDetailContainer(props) {
  const [loading, setLoading] = useState(true);
  const [variaciones, setVariaciones] = useState([]);
  const [product, setProduct] = useState({});
  const [cantidad, setCantidad] = useState(0);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const cartContext = useContext(CartContext);
  const sliderRef = useRef(0);
  const { id } = useParams();

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
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    dots: false,
    beforeChange: function (currentSlide, nextSlide) {
      const nextVariation = document.querySelector(
        `[data-index='${nextSlide}']`
      );

      const idNextVariation = nextVariation.children[0].children[0].id; //Ver si existe algun metodo mas facil para llegar al
      let currentVariation = variaciones.filter(
        (variacion) => variacion._id === idNextVariation
      );
      setSelectedVariation(currentVariation[0]);

      const variations = document.querySelectorAll(
        ".variation__container__name"
      );
      variations.forEach((variation) => {
        if (variation.id === idNextVariation) {
          variation
            .closest(".variation__container__name")
            .classList.add("variation__container__name--selected");
        } else {
          variation
            .closest(".variation__container__name")
            .classList.remove("variation__container__name--selected");
        }
      });
    },
    afterChange: function () {},
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // centerMode: true,
          initialSlide: 1,
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const handleCantidad = (cantidad) => {
    setCantidad(cantidad);
  };

  const handleVariation = (e, variation) => {
    const variations = document.querySelectorAll(".variation__container__name");
    variations.forEach((variation) => {
      variation
        .closest(".variation__container__name")
        .classList.remove("variation__container__name--selected");
    });
    e.target
      .closest(".variation__container__name")
      .classList.add("variation__container__name--selected");

    setSelectedVariation(
      variaciones.filter((variacion) => variacion._id === variation._id)[0]
    );

    const sliderIndex = document
      .querySelector(`[id='${variation._id}']`)
      .closest(".slick-slide")
      .getAttribute("data-index");
    console.log(sliderIndex);

    sliderRef.current.slickGoTo(sliderIndex);

    const imageVariations = document.querySelectorAll(".slider-image");
    imageVariations.forEach((imageVariation) => {
      if (imageVariation.id === variation._id) {
        imageVariation
          .closest(".slick-slide")
          .classList.add("slick-active", "slick-current");
      } else {
        imageVariation
          .closest(".slick-slide")
          .classList.remove("slick-active", "slick-current");
      }
    });
  };

  const handleAddCart = (e) => {
    const newProduct = {
      id: selectedVariation._id,
      precio: selectedVariation.precio,
      cantidad,
      image: selectedVariation.image,
      nombre: product.nombre,
      variacion: selectedVariation.nombre,
    };
    // console.log(newProduct);
    cartContext.addProduct(newProduct);
  };

  if (!loading) {
    // console.log(selectedVariation);
  }
  // const {} = props;

  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div className="container container-fdp">
          <CartContainer /> {/* //PONER ESTO EN LA HOME */}
          <div className="flex-responsive">
            <h2 className="title-mobile">{`${product.nombre} ${selectedVariation.nombre}`}</h2>
            <div className="col-images">
              <div className="slider-container">
                <Slider {...sliderSettings} ref={sliderRef}>
                  {variaciones.map((variacion) => {
                    return (
                      <img
                        className="slider-image"
                        key={variacion._id + 2}
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
              <CurrencyFormat
                className="price"
                value={selectedVariation.precio}
                thousandSeparator="."
                decimalSeparator=","
                displayType={"text"}
                prefix={"$"}
              ></CurrencyFormat>
              {/* <h3 className="price">${selectedVariation.precio}</h3> */}
              <div className="cant-variation">
                <div className="selection">
                  <h4>Cantidad:</h4>
                  <ProductCount onAddCantidad={handleCantidad} />
                </div>
                <div className="variation">
                  <h4>Edición:</h4>
                  <div className="variation__container">
                    {variaciones.map((variacion) => {
                      return (
                        <div
                          className="variation__container__name"
                          key={`var${variacion._id}`}
                          onClick={(e) => handleVariation(e, variacion)}
                          id={`${variacion._id}`}
                        >
                          <p>{variacion.nombre}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="distance">
                <input type="text" />
                <button></button>
              </div>
              <div className="buttons">
                <button
                  className="buyButton"
                  //handleEvent={handleAddCart}
                  //cant={cant}
                  //disabled={cant === 0}
                >
                  Comprar
                </button>
                <button
                  className="cartButton"
                  onClick={handleAddCart}
                  // cant={cant}
                  // disabled={cant === 0}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
          <div className="description">
            <h3>Descripción</h3>
            <p>{product.descripcion}</p>
          </div>
        </div>
      )}
    </>
  );
}
