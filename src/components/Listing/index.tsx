import './styles.css'
import { ProductDTO } from '../../models/product'

type Props = {
    products: ProductDTO[]
}

export default function Listing({ products }: Props) {

    return (
        <div className='dsf-listing-card mb20'>
            <div className='dsf-products-card-container'>
                {
                    products.length > 0 ? (
                        products.map(product => (
                            <div className='dsf-product-card' key={product.id}>
                                <p>{product.name}</p>
                                <h4>R$ {product.price.toFixed(2)}</h4>
                            </div>
                        )
                    )
                    )
                    :
                    <p className='dsf-error-msg'>Nenhum produto encontrado, filtre novamente.</p>
                }
            </div>
        </div>
    )
}