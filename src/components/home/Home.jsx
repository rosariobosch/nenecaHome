//Styles
import './Home.scss';
//Components
import ProductCard from '../product-card/ProductCard';
import NuestrosProductos from '../nuestros-productos/NuestrosProductos';
const Home = () => {

    return(
        <main className='home'>
            <section className='home-header'>
                <div className='home-header__banner'>
                    <hgroup className='title-container'>
                        <h1 className='title'>Home & deco</h1>
                        <h2 className='subtitle'>Conocé nuestras velas y enamorate de sus aromas</h2>
                    </hgroup>
                    <button className='see-more-btn'>Ver más</button>
                </div>
                <p className='home-header__text'>¡Conocé los favoritos de nuestras clientas!</p>
            </section>
            {/* TO DO: crear slider para productos destacados con las product cards */}
            <ProductCard />

            <NuestrosProductos />

        </main>
    )
}

export default Home