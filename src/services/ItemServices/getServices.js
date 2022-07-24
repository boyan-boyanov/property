import Parse from 'parse/dist/parse.min.js';

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

export async function getOne(id){
    
        const Properties = Parse.Object.extend('Properties');
        const query = new Parse.Query(Properties);
        query.equalTo('objectId', id)
        // You can also query by using a parameter of an object
        // query.equalTo('objectId', 'xKue915KBG');
        try {
          const results = await query.find();
        //   console.log(`ParseObjects found: ${JSON.stringify(results)}`);
        //   console.log(results);
          let result = {}
          for (const object of results) {
            // Access the Parse Object attributes using the .GET method
            const Owner = object.get('Owner')
            const Type = object.get('Type')
            const Description = object.get('Description')
            const Price = object.get('Price')
            const RentOrSale = object.get('RentOrSale')
            const Images = object.get('Images')
            result = {Owner, Type, Description, Price, RentOrSale, Images}
            // console.log(Owner);
            // console.log(Type);
            // console.log(Description);
            // console.log(Price);
            // console.log(RentOrSale);
            // console.log(Images);
          }
          return result
        } catch (error) {
          console.error('Error while fetching Properties', error);
        }
     
}