import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomeComponent.module.css'




export default function HomeComponent() {
const navigate = useNavigate()

const searchType = (e) => {
e.preventDefault()
const data = new FormData(e.target)
const search = data.get('search')
navigate(`/search/${search}`)
console.log(search);
}


    return (
        <div className={styles['homeComponentContainer']}>
            <h1 className={styles['homeComponentContainer__header']}>Find your dream home!</h1>
            <form className={styles['homeComponentContainer__search']} onSubmit={searchType}>
                <input className={styles['homeComponentContainer__input']} type='text' name='search' placeholder='what are you looking for...'></input>
                <input className={styles['homeComponentContainer__submit']} type='submit' value='SEARCH'></input>
            </form>
        </div>
    )
}