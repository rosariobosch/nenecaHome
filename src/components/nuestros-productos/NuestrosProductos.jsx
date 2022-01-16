//Styles
import './nuestros-productos.scss'
//Components
import FilterCard from '../filter-card/FilterCard'
//Images
import productImg from '../../assets/home/product-card-1.png'
const NuestrosProductos = () => {

    return(

        <section className='home-products'>
            <div className='text'>
                <p>Nuestros productos</p>
                <button>Ordernar por</button>
            </div>
            <FilterCard 
            filter="Alfombras" 
            bgImage={productImg} 
            />
            <FilterCard 
            filter="Bolsos" 
            bgImage={productImg} 
            />
            <FilterCard 
            filter="Mantas" 
            bgImage={productImg} 
            />
            <FilterCard 
            filter="Mesa" 
            bgImage={productImg} 
            />
            <FilterCard 
            filter="Deco" 
            bgImage={productImg} 
            />
            <FilterCard 
            filter="Percheros" 
            bgImage={productImg} 
            />
            <FilterCard 
            filter="Pottery" 
            bgImage={productImg} 
            />
            <FilterCard 
            filter="Velas" 
            bgImage={productImg} 
            />
            <FilterCard 
            filter="Kits" 
            bgImage={productImg} 
            />
        </section>
    )

}

export default NuestrosProductos