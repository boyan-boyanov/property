import React from 'react';
import { useState } from 'react';
import './loginForm.css'

export default function LoginForm({ error }) {
    const [details, setDetails] = useState({ name: '', email: '', password: '' })

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const Login = details => {
        console.log(details);

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

    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }

    return (
        <div className='loginForm__container'>
            <form className='loginForm' onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Login</h2>
                    {(error != "") ? (<div className='error'>{error}</div>) : ""}
                    <div className='form-group'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} />
                    </div>
                    <input type='submit' value='LOGIN'></input>
                </div>
            </form>
        </div>
    )
}

