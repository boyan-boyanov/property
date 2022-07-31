import React from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { useState, useContext } from 'react';
import { loggedIn } from '../../services/userServices';
import { useNavigate } from 'react-router-dom';
import './loginForm.css'

 const LoginForm = ({ error }) => {
    const [details, setDetails] = useState({ name: '', password: '' })
    const [inputError, setInputError] = useState({ name: '', password: '' })
    const [labelsErrors, setLabelsErrors] = useState({ name: '', password: '' })
    const [serverError, setServerError] = useState('')
    const navigate = useNavigate()

    const {userLogin} = useContext(AuthContext)

    function loginHandler(e) {
        setDetails(state => ({ ...state, [e.target.name]: e.target.value }), labelError(e.target.name, e.target.value))
    }

  

    function labelError(name, value) {
        if (name === "name") {
            setLabelsErrors(state => ({ ...state, name: !(value.length < 4) }))
        }
        if (name === "password") {
            setLabelsErrors(state => ({ ...state, password: !(value.length < 6) }))
        }
    }

    const inputValidate = (e) => {
        if (e.target.name === "name") {
            setInputError(state => ({ ...state, name: details.name.length < 4 }))
        };
        if (e.target.name === "password") {
            setInputError(state => ({ ...state, password: details.password.length < 6 }))
        };
    }

    // const adminUser = {
    //     email: "admin@admin.com",
    //     password: "admin123"
    // }

    async function submitHandler(e) {
        e.preventDefault();
        let transformName = details.name.toLocaleLowerCase().charAt(0).toUpperCase() + details.name.toLocaleLowerCase().slice(1)
        const sendDetails = {...details, name: transformName}
        const isLogedData = await loggedIn(sendDetails)
        console.log(isLogedData);
        if (isLogedData === "false") {
            setServerError("Username or password not match")
        } else {
            userLogin(JSON.parse(isLogedData))
                       navigate('/catalog')
        }
      

    }

    return (
        <div className='basicForm__container'>
            <form className='basicForm' onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Login</h2>
                    {serverError !== "" && <div className='loginError'>{serverError}</div>}
                    <div className='form-group'>
                        <label htmlFor="name" className={labelsErrors.name ? 'basicForm__label-error' : ''}>Name:</label>
                        <input type="name" name="name" id="name" onChange={loginHandler} value={details.name} onBlur={inputValidate} />
                    </div>
                    {inputError.name &&
                        <p className='basicForm__form-error'>
                            Username must be at least 4 character long.
                        </p>
                    }
                    <div className='form-group'>
                        <label htmlFor="password" className={labelsErrors.password ? 'basicForm__label-error' : ''}>Password:</label>
                        <input type="password" name="password" id="password" onChange={loginHandler} onBlur={inputValidate} />
                    </div>
                    {inputError.password &&
                        <p className='basicForm__form-error'>
                            Password must be at least 6 characters long.
                        </p>
                    }
                    <input disabled={!Object.values(labelsErrors).every(item => (item !== "" && item === true))} type='submit' value='LOGIN' onClick={submitHandler}></input>
                </div>
            </form>
        </div>
    )
}

export default LoginForm