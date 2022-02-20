//Styles
import './nuestros-productos.scss'
//Components
import FilterCard from '../filter-card/FilterCard'
//Images
import alfombras from '../../assets/home/categories-alfombras.png'
import bolsos from '../../assets/home/categories-bolsos.png'
import deco from '../../assets/home/categories-deco.png'
import kits from '../../assets/home/categories-kits.png'
import mantas from '../../assets/home/categories-mantas.png'
import mesa from '../../assets/home/categories-mesa.png'
import percheros from '../../assets/home/categories-percheros.png'
import pottery from '../../assets/home/categories-pottery.png'
import velas from '../../assets/home/categories-velas.png'
import { useEffect, useState } from 'react'
import ProductCard from '../product-card/ProductCard'


const NuestrosProductos = () => {

    const [productos, setProductos] = useState([])
    const [width, setWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    }, [])
    
    useEffect(() => {
        fetch(`http://backend-neneca.glitch.me/api/v1/producto/obtener`)
        .then(response => response.json())
        .then(data => setProductos(data.data))
    }, [])
    
    console.log(productos)
    return(

        width < 1200 ? (
            <>
            <section className='home-products'>
                <div className='text'>
                    <p>Nuestros productos</p>
                    <button>Ordernar por</button>
                </div>
                <FilterCard 
                filter="Alfombras" 
                bgImage={alfombras} 
                />
                <FilterCard 
                filter="Bolsos" 
                bgImage={bolsos} 
                />
                <FilterCard 
                filter="Mantas" 
                bgImage={mantas} 
                />
                <FilterCard 
                filter="Mesa" 
                bgImage={mesa} 
                />
                <FilterCard 
                filter="Deco" 
                bgImage={deco} 
                />
                <FilterCard 
                filter="Percheros" 
                bgImage={percheros} 
                />
                <FilterCard 
                filter="Pottery" 
                bgImage={pottery} 
                />
                <FilterCard 
                filter="Velas" 
                bgImage={velas} 
                />
                <FilterCard 
                filter="Kits" 
                bgImage={kits} 
                />
            </section>
            </>
        ) : (
            <>
                <div className='filtros'>
                    <button>Todos</button>
                    {productos.map((element) => {
                        return <button>{element.categoria}</button>
                    })}
                </div>
            <section className='productos-container'>
 
                {productos && productos.map((element) => {
                let name = element.nombre
                let description = element.descripcion
                return element.variaciones.map((element) => {
                    return <ProductCard 
                    title={name + ' ' + element.nombre}
                    subtitle={description}
                    price={element.precio}
                    img={element.image}
                    key={element._id} />
                })
                })}
            </section>
            </>
        )
    )
}

export default NuestrosProductos