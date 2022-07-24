import React, { useEffect, useState } from 'react';
import { getAll } from '../../services/ItemServices/getServices';
import CardComponent from '../CardComponent/CardComponent';
import './catalogComponent.css'

export const CatalogComponent = () => {
    const [allData, setAllData] = useState([])

    useEffect(() => {
        async function waitData() {
            const data = await getAll()
            console.log(data);
            setAllData(data.results)
        }
        waitData()
    }, []);

    function showAll() {
        //const data = (await allData).results;
        console.log(allData);
    }
   

    function createProps(x) {
        let pic = ''
        for (let img of x.Images) {
            pic = pic + img + " "
            console.log(pic);
        }
        pic = pic.trim()
        return {
            size: "small",
            cardWidth: "",
            cardHeight: "",
            background: "",
            title: x.Description,
            titleShadow: "",
            titleColor: "",
            subtitle: x.RentOrSale,
            description: `${x.Type} for ${x.RentOrSale},  price: ${x.Price} $`,
            descriptionColor: "",
            image: pic,
            subtitleColor: "",
            subtitleBackground: "",
            textRows: ""  //not work for now
        }
    }

    return (
        <div className={'catalog-container'}>
            <h1>Catalog</h1>
            {allData.map(x => <CardComponent key={x.objectId} styles={createProps(x)} allId={{owner: x.Owner, itemId: x.objectId}}/>)}

        </div>
    )
}

