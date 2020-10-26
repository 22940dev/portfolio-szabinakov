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
                <div className='contactDetailsEach'>
                    <label htmlFor='name'>Full Name</label>
                    <input
                        data-testid='name'
                        type='text'
                        name='name'
                        value={state.name}
                        className='formInputName'
                        onChange={onInputChange}/>
                </div>
                <div className='contactDetailsEach'>
                    <label htmlFor='email'>Email</label>
                    <input 
                        data-testid='email'
                        type='text'
                        name='email'
                        value={state.email}
                        className='formInputEmail'
                        onChange={onInputChange}/>
                </div>
                <div className='contactDetailsEach'>
                    <label htmlFor='subject'>Subject</label>
                    <input 
                        type='text'
                        data-testid='subject'
                        name='subject'
                        value={state.subject}
                        className='formInputSubject'
                        onChange={onInputChange}/>
                </div>
                <div className='contactDetailsEach'>
                    <label htmlFor='message'>Message</label>
                    <input 
                        type='textarea'
                        data-testid='message'
                        name='message'
                        value={state.message}
                        className='formInputMessage'
                        onChange={onInputChange}/>
                </div>
                <div className='buttonContainer'>
                    <button 
                        type='submit'
                        data-testid='submitButton'
                        className='submitButtonForm'>
                            Send
                    </button>
                    <button 
                        type='reset'
                        data-testid='resetButton'
                        className='resetButtonForm'
                        onClick={resetForm}>
                        Reset
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact