import React, { useEffect, useState } from 'react';
import styles from './HomeComponent.module.css'
import HomeHeader from './HomeHeader'
import CardComponent from '../CardComponent/CardComponent';
import Parse from 'parse/dist/parse.min.js';
import Carousel from './CarouselComponent/Carousel';



const HomeComponent = () => {
    const [propertis, setProperties] = useState()
    const [pic, setPic] = useState('')
    const [caroselPic, setCaroselPic] = useState([])

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

 useEffect(() => {
(async () => {
    const query = new Parse.Query('Properties');      
    query.limit(10); // limit to at most 10 results      
    query.skip(0); // skip the first 10 results      
    try {
      const results = await query.find();
      const data = JSON.stringify(results)         
      console.log(JSON.parse(data));
      setCaroselPic(JSON.parse(data))
    } catch (error) {
      console.log(`Error: ${JSON.stringify(error)}`);
    }
})()
 },[])

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

export default HomeComponent