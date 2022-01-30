import {useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-home.scss";
import ProductCard from "../product-card/ProductCard";

const SliderHome = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch(`http://backend-neneca.glitch.me/api/v1/producto/obtener`)
        .then(response => response.json())
        .then(data => setProductos(data.data))
    }, [])

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
        <div className="slider-home">
          <Slider {...sliderSettings}>
            {productos && productos.map((element) => {
                    const variaciones = element.variaciones.length > 0
                    return(
                        <ProductCard 
                        title={variaciones ? element.variaciones[0].nombre : element.nombre}
                        subtitle={element.descripcion}
                        price={variaciones ? element.variaciones[0].precio : element.precio}
                        img={variaciones ? element.variaciones[0].image : element.image}
                        key={element.id}
                    />
                    )
                })}
          </Slider>
        </div>
      );
}

export default SliderHome