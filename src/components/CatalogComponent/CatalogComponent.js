import React, { useEffect, useState } from 'react';
import { getAll } from '../../services/ItemServices/getServices';
import CardComponent from '../CardComponent/CardComponent';
import './catalogComponent.css'

export const CatalogComponent = () => {
    const [allData, setAllData] = useState([])

    useEffect(() => {
        async function waitData() {
            const data = await getAll()
            // console.log(data);
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
            //console.log(pic);
        }
        pic = pic.trim()
        return {
            size: "small",
            title: x.Description,
            subtitle: x.RentOrSale,
            description: `${x.Type} for ${x.RentOrSale},  price: ${x.Price} $`,
            image: pic,
        }
    }

    return (
        <div className={'catalog-container'}>
            <h1>Catalog</h1>
            {allData.length > 0 ?
                allData.map(x => <CardComponent key={x.objectId} styles={createProps(x)} allId={{ owner: x.Owner, itemId: x.objectId }} />)
                : <p className='no-articles'>No Articles yet</p>}
        </div>
    )
}

