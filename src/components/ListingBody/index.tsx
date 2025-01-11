import { useEffect, useState } from 'react'
import FilterCard from '../FilterCard'
import Listing from '../Listing'
import { ProductDTO } from '../../models/product'
import * as productService from '../../services/product-service'

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([])

    useEffect (() => {
        const filteredProducts = productService.findByPrice(0, 1500)
        setProducts(filteredProducts)
    }, [])

    return (
        <section className="dsf-main-container">
            <FilterCard />
            <Listing products={products}/>
        </section>
    )
}