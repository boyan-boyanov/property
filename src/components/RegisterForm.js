import React from 'react';
import { useState } from 'react';
import './loginForm.css'

export default function RegisterForm({ Login, error }) {
    const [details, setDetails] = useState({ name: '', email: '', password: '' })

    function registerHandler(e) {
        setDetails(state => ({ ...state, [e.target.name]: e.target.value }))
        console.log(details);
    }

    function submitHandler (e) {
        e.preventDefault();
        
    }

    return (
        <div className='loginForm__container'>
            <form className='loginForm' onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Register</h2>
                    {(error != "") ? (<div className='error'>{error}</div>) : ""}
                    <div className='form-group'>
                        <label htmlFor="name">Name:</label>
                        <input type="name" name="name" id="name" onChange={registerHandler} value={details.name} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={registerHandler} value={details.email} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={registerHandler} />
                    </div>
                    <input type='submit' value='LOGIN'></input>
                </div>
            </form>
        </div>
    )
}

