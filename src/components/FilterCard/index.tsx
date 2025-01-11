import { useState } from 'react'
import './styles.css'

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onFilter: Function
}

type FormData = {
    min?: number,
    max?: number
}

export default function FilterCard({ onFilter }: Props) {

    const [formData, setFormData] = useState<FormData>({})

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmit(event: any) {
        event.preventDefault()
        setFormData(formData)
        onFilter(formData.min, formData.max)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className='dsf-filter-card mt20 mb20'>
            <form className='dsf-form-container' onSubmit={handleSubmit}>
                <input name='min' value={formData.min || ""} className='mb20' type="text" placeholder='Preço mínimo' onChange={handleChange}/>
                <input name='max' value={formData.max || ""} className='mb20' type="text" placeholder='Preço máximo' onChange={handleChange}/>
                <button type='submit' >Filtrar</button>
            </form>
        </div>
    )
}