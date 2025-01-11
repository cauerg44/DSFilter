import { useEffect, useState } from 'react'
import FilterCard from '../FilterCard'
import Listing from '../Listing'
import { ProductDTO } from '../../models/product'
import * as productService from '../../services/product-service'

type QueryParams = {
    minValue: number,
    maxValue: number
}

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([])

    const [queryParams, setQueryParams] = useState<QueryParams>({
        minValue: 0,
        maxValue: Number.MAX_VALUE
    })

    useEffect (() => {
        const filteredProducts = productService.findByPrice(queryParams.minValue, queryParams.maxValue)
        setProducts(filteredProducts)
    }, [queryParams])

    function handleFilter(min: number, max: number) {
        setQueryParams({ ...queryParams, minValue: min, maxValue: max })
    }

    return (
        <section className="dsf-main-container">
            <FilterCard onFilter={handleFilter}/>
            <Listing products={products}/>
        </section>
    )
}