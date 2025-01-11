import FilterCard from '../FilterCard'
import Listing from '../Listing'
import './styles.css'

export default function ListingBody() {

    return (
        <section className="dsf-main-container">
            <FilterCard />
            <Listing />
        </section>
    )
}