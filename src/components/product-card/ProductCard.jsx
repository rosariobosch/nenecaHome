import './product-card.scss';
import productImg from '../../assets/home/product-card-1.png'
const ProductCard = ({img, title, subtitle, price}) => {

    // console.log("data:image/jpeg;base64," + img)
    return(
        <div className='product-card'>
            <img src={`data:image/${img.contentType};base64,${img.data.toString('base64')}`} width='500' height='200' alt="Imagen del producto" />
            <h2 className='title'>{title}</h2>
            <h3 className='subtitle'>{subtitle}</h3>
            <p className='price'>$ {price}</p>
        </div>
    )
}

export default ProductCard