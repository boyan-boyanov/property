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

export async function getFavorites(id) {

  const query = new Parse.Query('Properties');
  query.containsAll('favorites', [id]);
  try {
    const results = await query.find();
    return JSON.stringify(results);
  } catch (error) {
    console.log(`ParseObjects found: ${JSON.stringify(error)}`);
  }
}

export async function getOne(id) {

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
      const comments = object.get('comments')
      const favorites = object.get('favorites')

      result = { Owner, Type, Description, Price, RentOrSale, Images, comments, favorites }
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

export async function getByOwner(id) {
  // 'Post' is just an arbitrary class, replace it with your custom class
  const query = new Parse.Query('Properties');

  // Finds objects whose title is equal to 'Documentation'
  query.equalTo('Owner', id);

  const result = []

  try {
    const results = await query.find();
    for (let object of results) {
      const current = JSON.stringify(object);
      result.push(JSON.parse(current))
      // console.log(JSON.parse(current));
    }
    return result
    //console.log(`ParseObjects found: ${JSON.stringify(results)}`);
  } catch (error) {
    // console.log(`ParseObjects found: ${JSON.stringify(results)}`);
  }
}

export async function getByQuery(searchType) {
  let type = searchType.toLowerCase()

  // 'Post' is just an arbitrary class, replace it with your custom class
  const query = new Parse.Query('Properties');
  let searchBy = ""
  if (type === 'rent' || type === 'sale') {
    searchBy = "RentOrSale"
  } else if (type === 'house' || type === 'apartment' || type === 'office') {
    searchBy = "Type"
  } else if (type === 'houses' || type === 'apartments' || type === 'offices') {
    searchBy = "Type"
    type = type.slice(0, -1);
  } else {
    searchBy = "Description"
  }
  console.log(searchBy);
  // Finds objects whose title is equal to 'Documentation'
  if (searchBy === 'Type' || searchBy === 'RentOrSale') {
    query.equalTo(searchBy, type);
  } else {
    query.fullText(searchBy, type);
  }

  const result = []

  try {
    const results = await query.find();
    for (let object of results) {
      const current = JSON.stringify(object);
      result.push(JSON.parse(current))
      // console.log(JSON.parse(current));
    }
    return result
    //console.log(`ParseObjects found: ${JSON.stringify(results)}`);
  } catch (error) {
    // console.log(`ParseObjects found: ${JSON.stringify(results)}`);
  }
}

