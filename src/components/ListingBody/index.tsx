import { useEffect, useState } from 'react'
import FilterCard from '../FilterCard'
import Listing from '../Listing'
import { ProductDTO } from '../../models/product'
import * as productService from '../../services/product-service'

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([])

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(Number.MAX_VALUE)

    useEffect (() => {
        const filteredProducts = productService.findByPrice(minValue, maxValue)
        setProducts(filteredProducts)
    }, [minValue, maxValue])

    function handleFilter(min: number, max: number) {
        setMinValue(min)
        setMaxValue(max)
    }

    return (
        <section className="dsf-main-container">
            <FilterCard onFilter={handleFilter}/>
            <Listing products={products}/>
        </section>
    )
}