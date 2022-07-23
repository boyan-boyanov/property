import React from 'react';
import styles from './HomeComponent.module.css'




export default function HomeComponent() {




    return (
        <div className={styles['homeComponentContainer']}>
            <h1 className={styles['homeComponentContainer__header']}>Find your dream home!</h1>
            <form className={styles['homeComponentContainer__search']}>
                <input className={styles['homeComponentContainer__input']} type='text' name='search' placeholder='what are you looking for...'></input>
                <input className={styles['homeComponentContainer__submit']} type='submit' value='SEARCH'></input>
            </form>
        </div>
    )
}