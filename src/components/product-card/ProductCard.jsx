import './product-card.scss';
import productImg from '../../assets/home/product-card-1.png'
const ProductCard = () => {

    return(
        <div className='product-card'>
            <img src={productImg} alt="Imagen del producto" />
            <h2 className='title'>Difusor Harmony</h2>
            <h3 className='subtitle'>Aroma único e irresistible</h3>
            <p className='price'>$PRECIO</p>
        </div>
    )
}

export default ProductCard