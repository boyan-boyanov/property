import React, { useEffect, useState } from 'react';
import { getByQuery } from '../../services/ItemServices/getServices';
import CardComponent from '../CardComponent/CardComponent';
import '../CatalogComponent/catalogComponent.css'
import { useParams } from 'react-router-dom';

export const SearchComponent = () => {
    const [allData, setAllData] = useState([])
    let {query} = useParams()
    console.log(query);

    useEffect(() => {
        console.log(query);
        async function waitData() {
            const data = await getByQuery(query)
             console.log(data);
            setAllData(data)
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
        }
    }

    return (
        <div className={'catalog-container'}>
            <h1>Result of your serach: {query}</h1>
            {allData.length > 0 ?
                allData.map(x => <CardComponent key={x.objectId} styles={createProps(x)} allId={{ owner: x.Owner, itemId: x.objectId }} />)
                : <p className='no-articles'>No Articles yet</p>}
        </div>
    )
}