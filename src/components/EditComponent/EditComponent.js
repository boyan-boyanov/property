//import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import CreatePropertyForm from '../CreateComponent/CreatePropertyForm'
//import { getOne } from '../../services/ItemServices/getServices';
import { AuthContext } from '../../contexts/UserContext';
import { useContext } from 'react';


export const EditComponent = () => {
    const params = useParams()
    const { auth } = useContext(AuthContext)
    if (!auth.myOffer) {
        console.log('noaut');
        return <Navigate to='/' replace />
    }
    const arrayOfOffers = auth.myOffer
    const objectId = params.objectId
    console.log(auth);
    console.log(arrayOfOffers);
    console.log(objectId);


    if (!arrayOfOffers.includes(objectId)) {
        console.log(arrayOfOffers);

        return <Navigate to='/' replace />
    }

    return (
        <CreatePropertyForm data={params} />
    )
}