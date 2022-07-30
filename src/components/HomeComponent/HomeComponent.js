import React, { useState } from 'react';
import styles from './HomeComponent.module.css'
import HomeHeader from './HomeHeader'
import CardComponent from '../CardComponent/CardComponent';
import Parse from 'parse/dist/parse.min.js';
import Carousel from './CarouselComponent/Carousel';



export default function HomeComponent() {
    const [propertis, setProperties] = useState()
    const [pic, setPic] = useState('')

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


async function getSome (e){
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


    return (
        <>
            <HomeHeader />
            {/* <CardComponent styles={styles} /> */}
            <Carousel />
            <button onClick={getSome}>GET SOME PROPERTIES</button>
        </>
    )
}