import React, { useEffect, useState } from 'react';
import style from './HomeComponent.module.css'
import HomeHeader from './HomeHeader'
import CardComponent from '../CardComponent/CardComponent';
import Parse from 'parse/dist/parse.min.js';
import Carousel from './CarouselComponent/Carousel';
import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {
    const navigate = useNavigate()
    let styles = {
        size: "small",
        cardWidth: "",
        cardHeight: "",
        background: "",
        title: "New Title",
        titleShadow: "",
        titleColor: "",
        subtitle: "subtitle",
        description: "Enter descrption here",
        descriptionColor: "",
        image: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__480.jpg",
        subtitleColor: "",
        subtitleBackground: "",
        textRows: ""  //not work for now
    }


    async function getSome(e) {
        const query = new Parse.Query('Properties');
        query.limit(3); // limit to at most 10 results      
        query.skip(3); // skip the first 10 results      
        try {
            const results = await query.find();
            const data = JSON.stringify(results)
            console.log(JSON.parse(data));
        } catch (error) {
            console.log(`Error: ${JSON.stringify(error)}`);
        }
    }

    // async function createPhoto(e) {
    //     e.preventDefault()
    //     const formData = new FormData(e.target)
    //     const pic = formData.get('filename')
    //     console.log(pic);
    //     let myFile = pic.toString('base64')

    //     let myPhoto = new Parse.File('myfile.png', { base64: myFile })
    //     let Photo = Parse.Object.extend('photos');
    //     let photo = new Photo();
    //     photo.set('photo', myPhoto);
    //     photo.save();
    // }
    const searchType = (event, type) => {
        console.log(event);
        console.log(type);
        navigate(`/search/${type}`)
    }
    return (
        <>
            <HomeHeader />
            {/* <CardComponent styles={styles} /> */}
            <Carousel />

            <section className={style['home-center']}>
                <h2 className={style['home-center__header']} >CATEGORIES</h2>
                <div className={style['home-center__allcategories']} >
                    <article className={style['home-center__card']} onClick={event => searchType(event, 'house')}>
                        <div className={style['home-center__card__container']} >
                            <img className={style['home-center__card__container__img']} src="/house.png" alt="house" />
                            <h2>Houses</h2>
                        </div>
                    </article>
                    <article className={style['home-center__card']} onClick={event => searchType(event, 'apartment')}>
                        <div className={style['home-center__card__container']} >
                            <img className={style['home-center__card__container__img']} src="/apartment.jpg" alt="apartment" />
                            <h2>Apartments</h2>
                        </div>
                    </article>
                    <article className={style['home-center__card']} onClick={event => searchType(event, 'office')} >
                        <div className={style['home-center__card__container']} >
                            <img className={style['home-center__card__container__img']} src="/office.jpg" alt="office" />
                            <h2>Offices</h2>
                        </div>
                    </article>
                </div>
            </section>
            {/* <form onSubmit={createPhoto}>
                <label for="filename">Select a file:</label>
                <input type="file" id="myfile" name="filename" />
                <input type="submit" onSubmit={createPhoto} />
            </form> */}
        </>
    )
}

export default HomeComponent