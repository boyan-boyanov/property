import React from 'react';
import { useState } from 'react';
import { loggedIn } from '../../services/userServices';
import './loginForm.css'

export default function LoginForm({ error }) {
    const [details, setDetails] = useState({ name: '', password: '' })

    function loginHandler(e){
        setDetails(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const Login = details => {
        //console.log(details);
        loggedIn(details)
        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("admin loged");
            //   setUser({
            //     name: details.name,
            //     email: details.email
            //   });
        } else {
            //   setError("Some Error");
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        console.log(details);
        Login(details)
    }

    return (
        <div className='basicForm__container'>
            <form className='basicForm' onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Login</h2>
                    {(error != "") ? (<div className='error'>{error}</div>) : ""}
                    <div className='form-group'>
                        <label htmlFor="name">Name:</label>
                        <input type="name" name="name" id="name" onChange={loginHandler} value={details.name} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={loginHandler} />
                    </div>
                    <input type='submit' value='LOGIN' onClick={submitHandler}></input>
                </div>
            </form>
        </div>
    )
}

