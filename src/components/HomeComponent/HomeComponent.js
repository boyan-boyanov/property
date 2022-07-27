import React, { useState } from 'react';
import styles from './HomeComponent.module.css'
import HomeHeader from './HomeHeader'
import CardComponent from '../CardComponent/CardComponent';



export default function HomeComponent() {
    const [propertis, setProperties] = useState()

    
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



    return (
        <>
            <HomeHeader />
            {/* <CardComponent styles={styles} /> */}
        </>
    )
}