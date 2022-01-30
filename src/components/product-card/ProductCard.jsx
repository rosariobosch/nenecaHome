import './product-card.scss';
import productImg from '../../assets/home/product-card-1.png'
const ProductCard = ({img, title, subtitle, price}) => {

    return(
        <div className='product-card'>
            <img src={img} alt="Imagen del producto" />
            <h2 className='title'>{title}</h2>
            <h3 className='subtitle'>{subtitle}</h3>
            <p className='price'>{price}</p>
        </div>
    )
}

export default ProductCard