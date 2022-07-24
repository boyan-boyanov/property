import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreatePropertyForm from '../Properties/CreatePropertyForm'
import { getOne } from '../../services/ItemServices/getServices';


export const EditComponent = () => {
    const params = useParams()

    const [itemData, setItemData] = useState()

    useEffect(() => {
        async function waitData() {
            const data = await getOne(params.objectId)
            console.log( await data);
            
            setItemData(data)
        }
       waitData()
        console.log(itemData);
    }, [params.objectId]);

    return (
        <CreatePropertyForm data={params} />
    )
}