import { useContext, useEffect, useState } from 'react'
import FilterCard from '../FilterCard'
import Listing from '../Listing'
import { ProductDTO } from '../../models/product'
import * as productService from '../../services/product-service'
import { ContextItemCount } from '../../utils/context-count'

type QueryParams = {
    minValue: number,
    maxValue: number
}

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([])

    const {setContextItemCount} = useContext(ContextItemCount)

    const [queryParams, setQueryParams] = useState<QueryParams>({
        minValue: 0,
        maxValue: Number.MAX_VALUE
    })

    useEffect (() => {
        const filteredProducts = productService.findByPrice(queryParams.minValue, queryParams.maxValue)
        setProducts(filteredProducts)
        setContextItemCount(filteredProducts.length)
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