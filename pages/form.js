import { useState } from 'react';

const Form = () => {

    const requires = yup.object().shape( {

    })



    const [enters, setEnters] = useState([])

    const onChange = (evt) => {
        const name = evt.target.name
        const val = evt.target.value
        setEnters((values) => ({ ...values, [name]: val}))
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <label htmlFor='Name'> Name:
                <input
                id='name-input'
                type='text'
                name='name'
                value={enters.name || ''}
                onChange={onChange}
                />
            </label>
            <br />
            <

        </form>
    )














}
