import React from 'react';
import { useState } from 'react';
import { createItem } from '../../services/ItemServices/createService';
import '../AuthComponents/loginForm.css'


export default function CreatePropertyForm({ error }) {
    const IMAGE_PATTERN = /^https?:\/\/.+$/
    const [details, setDetails] = useState({ type: 'house', description: '', price: '', image: '', rentOrSale: '' })
    const [inputError, setInputError] = useState({})
    const [labelsErrors, setLabelsErrors] = useState({ description: '', price: '', image: '', rentOrSale: '' })
    function createHandler(e) {
        setDetails(state => ({ ...state, [e.target.name]: e.target.value }), labelError(e.target.name, e.target.value))
    }


    function labelError(name, value) {
        if (name == "price") {
            setLabelsErrors(state => ({ ...state, price: !isNaN(Number(value)) }))
            if (value == '') {
                setLabelsErrors(state => ({ ...state, price: false }))
            }
        }
        if (name == "image") {
            setLabelsErrors(state => ({ ...state, image: IMAGE_PATTERN.test(value) }))
        }
        if (name == "description") {
            setLabelsErrors(state => ({ ...state, description: !(value.length < 10) }))
        }
        if (name == "rentOrSale") {
            setLabelsErrors(state => ({ ...state, rentOrSale: true }))
        }
    }

    const inputValidate = (e) => {
        if (e.target.name == "description") {
            setInputError(state => ({ ...state, description: details.description.length < 10 }))
        };
        if (e.target.name == "price") {
            setInputError(state => ({ ...state, price: isNaN(Number(details.price)) }))
            if (details.price == '') {
                setInputError(state => ({ ...state, price: true }))
            }
        };
        if (e.target.name == "image") {
            console.log(details.image);
            setInputError(state => ({ ...state, image: !IMAGE_PATTERN.test(details.image) }))
        };
    }

    function submitHandler(e) {
        e.preventDefault();
        createItem(details)
    }

    return (
        <div className='basicForm__container'>
            <form className='basicForm' onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Create Property</h2>
                    <div className='form-group'>
                        <label htmlFor="name" className='basicForm__label-error'>Type:</label>
                        <select name='type' id='type' value={details.type} onChange={createHandler}>
                            <option value='house' >House</option>
                            <option value='apartment'>Apartment</option>
                            <option value='office'>Office</option>
                        </select>
                        {/* <input type="name" name="name" id="name" onChange={createHandler} value={details.name} onBlur={inputValidate} /> */}
                    </div>

                    <div className='form-group'>
                        <label htmlFor="description" className={labelsErrors.description ? 'basicForm__label-error' : ''}>Description:</label>
                        <input type="text" name="description" id="description" onChange={createHandler} value={details.description} onBlur={inputValidate} />
                    </div>
                    {inputError.description &&
                        <p className='basicForm__form-error'>
                            Description must be at least 10 characters.
                        </p>
                    }

                    <div className='form-group'>
                        <label htmlFor="price" className={labelsErrors.price ? 'basicForm__label-error' : ''} >Price:</label>
                        <input type="text" name="price" id="price" onChange={createHandler} value={details.price} onBlur={inputValidate} />
                    </div>
                    {inputError.price &&
                        <p className='basicForm__form-error'>
                            Price must be a number.
                        </p>
                    }
                    <div className='form-group'>
                        <label htmlFor="image" className={labelsErrors.image ? 'basicForm__label-error' : ''}  >Images:</label>
                        <input type="text" name="image" id="image" onChange={createHandler} value={details.image} onBlur={inputValidate} />
                    </div>
                    {inputError.image &&
                        <p className='basicForm__form-error'>
                            Image must be valid url.
                        </p>
                    }

                    <div className='form-group'>
                        <label htmlFor="rent" className={'basicForm__label-error label-radio' + ` ${details.rentOrSale == 'rent' ? 'selected' : ''}`}>Rent:</label>
                        <input type="radio" className='btn-radio' name="rentOrSale" value='rent' id="rent" onChange={createHandler} />
                        <label htmlFor="sale" className={'basicForm__label-error label-radio' + ` ${details.rentOrSale == 'sale' ? 'selected' : ''}`}>Sale:</label>
                        <input type="radio" className='btn-radio' name="rentOrSale" value='sale' id="sale" onChange={createHandler} />
                    </div>

                    <input disabled={!Object.values(labelsErrors).every(item => (item !== "" && item == true))} type='submit' value='CREATE' onClick={submitHandler}></input>
                </div>
            </form>
        </div>
    )
}
