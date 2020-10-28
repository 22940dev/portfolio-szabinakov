import React, { useState } from 'react'
import axios from 'axios'

import '../styles/Contact.css'

const Contact = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [result, setResult] = useState(null)

    const sendEmail = (e) => {
        e.preventDefault()
        axios
        .post('/send', {...state})
        .then(response => {
            setResult(response.data)
            setState({name:'', email:'', subject:'', message:'' })
        })
        .catch(() => {
            setResult({ success: false, message: 'Something went wrong, Try again!3'})
        })
    }

    const onInputChange = (event) => {
        const {name, value} = event.target

        setState({
            ...state,
            [name]: value
        })

    }

    const resetForm = (event) => {
        setState({
            name:'',
            email:'',
            subject:'',
            message:''
        })
    }
    return(
        <div className='contactContainer'>
            {result && (
                <p>{result.message}</p>
            )}
            <form className='contactForm' onSubmit={sendEmail}>
                <div className='contactDetails'>
                    <label htmlFor='name'>Full Name
                    <input
                        data-testid='name'
                        type='text'
                        name='name'
                        value={state.name}
                        className='formInputName'
                        onChange={onInputChange}/>
                    </label>

                    <label htmlFor='email'>Email
                    <input 
                        data-testid='email'
                        type='text'
                        name='email'
                        value={state.email}
                        className='formInputEmail'
                        onChange={onInputChange}/>
                    </label>

                    <label htmlFor='subject'>Subject
                    <input 
                        type='text'
                        data-testid='subject'
                        name='subject'
                        value={state.subject}
                        className='formInputSubject'
                        onChange={onInputChange}/>
                    </label>

                    <label htmlFor='message'>Message
                    <textarea 
                        type='textarea'
                        data-testid='message'
                        name='message'
                        value={state.message}
                        className='textarea'
                        onChange={onInputChange}>
                    </textarea>
                    </label>
                </div>
                <div className='buttonContainer'>
                    <button 
                        type='submit'
                        data-testid='submitButton'
                        className='submitButtonForm'>
                            Send
                    </button>
                    <div>
                        <button 
                        type='reset'
                        data-testid='resetButton'
                        className='resetButtonForm'
                        onClick={resetForm}
                    >
                        Reset
                    </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact