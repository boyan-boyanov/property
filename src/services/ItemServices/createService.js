import Parse from 'parse/dist/parse.min.js';
import { getUserData, updateUser } from '../userServices';

const PARSE_APPLICATION_ID = '62MiP8VdJxtvy35FJ52VYDC5LDKk5asRiGMoiLPd';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'V5XM1OCDkmjasMI30CAnMnpsgkIBHMvzTNfoCBO4';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


export async function createItem(data) {
   // console.log(data);
    let owner = ''
    if (localStorage.getItem('userData')) {
        owner = JSON.parse(localStorage.getItem('userData')).objectId

    } else {
        throw new Error('There is not logged user')
    }
    const newHome = new Parse.Object('Properties');
    newHome.set('Owner', owner);
    newHome.set('Type', data.type);
    newHome.set('Description', data.description);
    newHome.set('Price', data.price);
    newHome.set('RentOrSale', data.rentOrSale);
    newHome.set('Images', [data.image]);
    try {
        const result = await newHome.save();
        const itemId = result.id
        
        //Prepare data to update myOffer list
        const userData = await getUserData()
       // console.log(userData);
        const dataForUpdate = {
            'myOffer': [...userData.myOffer, itemId]
        }
        updateUser(dataForUpdate)

        // Access the Parse Object attributes using the .GET method
        console.log('Properties created', result);
    } catch (error) {
        console.error('Error while creating Properties: ', error);
    }
}