import { useContext } from 'react'
import './styles.css'
import { ContextItemCount } from '../../utils/context-count.ts'

export default function Header() {

    const { contextItemCount } = useContext(ContextItemCount)

    return (
        <header>
            <nav className='dsf-main-container'>
                <h1>DSFilter</h1>
                <p><div className='dsf-products-count'>{contextItemCount}</div> produto(s)</p>
            </nav>
        </header>
    )
}