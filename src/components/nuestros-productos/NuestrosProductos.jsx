//Styles
import './nuestros-productos.scss'
//Components
import FilterCard from '../filter-card/FilterCard'
//Images
import productImg from '../../assets/home/product-card-1.png'
import alfombras from '../../assets/home/categories-alfombras.png'
import bolsos from '../../assets/home/categories-bolsos.png'
import deco from '../../assets/home/categories-deco.png'
import kits from '../../assets/home/categories-kits.png'
import mantas from '../../assets/home/categories-mantas.png'
import mesa from '../../assets/home/categories-mesa.png'
import percheros from '../../assets/home/categories-percheros.png'
import pottery from '../../assets/home/categories-pottery.png'
import velas from '../../assets/home/categories-velas.png'


const NuestrosProductos = () => {

    return(

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
    )

}

export default NuestrosProductos