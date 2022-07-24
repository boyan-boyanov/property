import CardComponent from '../CardComponent/CardComponent';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOne } from '../../services/ItemServices/getServices';


export const DetailsComponent = () => {
    const params = useParams()
    const [itemData, setItemData] = useState({})

    useEffect(() => {
        async function waitData() {
            const data = await getOne(params.objectId)
            console.log(data);
            setItemData(data)
        }
        waitData()
    }, [params.objectId]);

    
    function createProps(x) {
        let pic = ''
console.log(x);
        if (x.Images !== undefined) {
            for (let img of x.Images) {
                pic = pic + img + " "
            }
            pic = pic.trim()
        }
        return {
            size: "large",
            cardWidth: "1000px",
            cardHeight: "",
            background: "",
            title: itemData.Description,
            titleShadow: "",
            titleColor: "",
            subtitle: itemData.RentOrSale,
            description: `${itemData.Type} for ${itemData.RentOrSale},  price: ${itemData.Price} $`,
            descriptionColor: "",
            image: pic,
            subtitleColor: "",
            subtitleBackground: "",
            textRows: ""  //not work for now
        }
    }

    return (
        //<button onClick={showAll}>UTUTUTUTUT</button>
        <CardComponent styles={createProps(itemData)} allId={{owner: itemData.Owner, itemId: params.objectId}} />
    )
} 