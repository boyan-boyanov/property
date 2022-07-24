import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreatePropertyForm from '../Properties/CreatePropertyForm'
import { getOne } from '../../services/ItemServices/getServices';


export const EditComponent = () => {
    const params = useParams()

    
    return (
        <CreatePropertyForm data={params} />
    )
}