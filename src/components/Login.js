import React from 'react';

export default function Login() {
    return (
        <div>
            <div className='form-inner'>
                <h2>Login</h2>
                {/*ERROR!*/}
                <div className='form-group'>
                    <label htmlFor="name">Name:</label>
                    <input type="name" name="name" id="name"/>                  
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"/>                  
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"/>                  
                </div>
            </div>
        </div>
    )
}

