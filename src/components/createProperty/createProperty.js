import React from "react";

import { useState } from 'react';
import '../AuthComponents/loginForm.css'

export default function RegisterForm({ Login, error }) {
    const [details, setDetails] = useState({ name: '', email: '', password: '' })

    function registerHandler(e) {
        setDetails(state => ({ ...state, [e.target.name]: e.target.value }))
        
    }

    function submitHandler (e) {
        e.preventDefault();
       // console.log(details);
        addUser(details)
    }

    return (
        <div className='basicForm__container'>
            <form className='basicForm' onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Register</h2>
                    {(error !== "") ? (<div className='error'>{error}</div>) : ""}
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
                    <input type='submit' value='LOGIN' onClick={submitHandler}></input>
                </div>
            </form>
        </div>
    )
}