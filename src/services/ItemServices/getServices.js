import Parse from 'parse/dist/parse.min.js';
import { getUserData, updateUser } from '../userServices';

const PARSE_APPLICATION_ID = '62MiP8VdJxtvy35FJ52VYDC5LDKk5asRiGMoiLPd';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'V5XM1OCDkmjasMI30CAnMnpsgkIBHMvzTNfoCBO4';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


const headers = {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': '62MiP8VdJxtvy35FJ52VYDC5LDKk5asRiGMoiLPd',
    'X-Parse-REST-API-Key': '53WdfHoxCS9NGG50G6C2IWCHsUBjOfCt2LnDVasQ'
}



// export const getAll = () => {
//     return fetch(`${PARSE_HOST_URL}/classes/Properties`, {headers})
//         .then(res => res.json())
// };

export async function getAll() {
    try {
        let response = await fetch(`${PARSE_HOST_URL}/classes/Properties`, { headers });

        return await response.json();
    } catch (err) {
        console.error(err);
        // Handle errors here.
    }
}