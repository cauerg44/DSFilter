import './styles.css'

export default function FilterCard() {

    return (
        <div className='dsf-filter-card mt20 mb20'>
            <form className='dsf-form-container'>
                <input className='mb20' type="text" placeholder='Preço mínimo'/>
                <input className='mb20' type="text" placeholder='Preço máximo'/>
                <button>Filtrar</button>
            </form>
        </div>
    )
}