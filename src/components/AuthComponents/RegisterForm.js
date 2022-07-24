import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/userServices';
import './loginForm.css'

export default function RegisterForm({ Login, error }) {
    const EMAIL_PATTERN = /^([a-zA-Z0-9])+@([a-zA-Z0-9])+\.([a-zA-Z0-9])+$/
    const [details, setDetails] = useState({ name: '', email: '', password: '', repass: '' })
    const [inputError, setInputError] = useState({})
    const [labelsErrors, setLabelsErrors] = useState({ name: '', email: '', password: '', repass: '' })
    const [serverError, setServerError] = useState('')
    const navigate = useNavigate()

    function registerHandler(e) {
        setDetails(state => ({ ...state, [e.target.name]: e.target.value }), labelError(e.target.name, e.target.value))
    }


    function labelError(name, value) {
        if (name === "name") {
            setLabelsErrors(state => ({ ...state, name: !(value.length < 4) }))
        }
        if (name === "password") {
            setLabelsErrors(state => ({ ...state, password: !(value.length < 6) }))
            if (details.repass !== value) {
                setLabelsErrors(state => ({ ...state, repass: details.password === false }))
            }
        }
        if (name === "email") {
            setLabelsErrors(state => ({ ...state, email: EMAIL_PATTERN.test(value) }))
        }
        if (name === "repass") {
            setLabelsErrors(state => ({ ...state, repass: details.password === value }))
        }
    }

    const inputValidate = (e) => {
        if (e.target.name === "name") {
            setInputError(state => ({ ...state, name: details.name.length < 4 }))
        };
        if (e.target.name === "password") {
            setInputError(state => ({ ...state, password: details.password.length < 6 }))
        };
        if (e.target.name === "email") {
            setInputError(state => ({ ...state, email: !EMAIL_PATTERN.test(details.email) }))
        };
        if (e.target.name === "repass") {
            setInputError(state => ({ ...state, repass: details.password !== details.repass }))
        };
    }

    async function submitHandler(e) {
        e.preventDefault();
        // console.log(details);
        const isRegistered = await register(details)

        setServerError(isRegistered)
        if (isRegistered === "create") {
            navigate('/catalog')
        }else if(isRegistered === "false"){
            setServerError(isRegistered)
        }
    }

    return (
        <div className='basicForm__container'>
            <form className='basicForm' onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Register</h2>
                    {serverError !== "" && <div className='loginError'>Name or email alredy exist</div>}
                    <div className='form-group'>
                        <label htmlFor="name" className={labelsErrors.name ? 'basicForm__label-error' : ''}>Name:</label>
                        <input type="name" name="name" id="name" onChange={registerHandler} value={details.name} onBlur={inputValidate} />
                    </div>
                    {inputError.name &&
                        <p className='basicForm__form-error'>
                            Username must be at least 4 character long.
                        </p>
                    }
                    <div className='form-group'>
                        <label htmlFor="email" className={labelsErrors.email ? 'basicForm__label-error' : ''}>Email:</label>
                        <input type="email" name="email" id="email" onChange={registerHandler} value={details.email} onBlur={inputValidate} />
                    </div>
                    {inputError.email &&
                        <p className='basicForm__form-error'>
                            Email must be valid.
                        </p>
                    }
                    <div className='form-group'>
                        <label htmlFor="password" className={labelsErrors.password ? 'basicForm__label-error' : ''}>Password:</label>
                        <input type="password" name="password" id="password" onChange={registerHandler} onBlur={inputValidate} />
                    </div>
                    {inputError.password &&
                        <p className='basicForm__form-error'>
                            Password must be at least 6 characters long.
                        </p>
                    }
                    <div className='form-group'>
                        <label htmlFor="repass" className={labelsErrors.repass ? 'basicForm__label-error' : ''}>Confirm Password:</label>
                        <input type="password" name="repass" id="repass" onChange={registerHandler} onBlur={inputValidate} />
                    </div>
                    {inputError.repass &&
                        <p className='basicForm__form-error'>
                            Your password and confirmation password do not match.
                        </p>
                    }
                    <input disabled={!Object.values(labelsErrors).every(item => (item !== "" && item === true))} type='submit' value='REGISTER' onClick={submitHandler}></input>
                </div>
            </form>
        </div>
    )
}

