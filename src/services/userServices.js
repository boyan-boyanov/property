import Parse from 'parse/dist/parse.min.js';

 const PARSE_APPLICATION_ID = '62MiP8VdJxtvy35FJ52VYDC5LDKk5asRiGMoiLPd';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'V5XM1OCDkmjasMI30CAnMnpsgkIBHMvzTNfoCBO4';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export async function addUser(data) {
    console.log(data);
     const user = new Parse.User();
     user.set('username', data.name);
     user.set('email', data.email);
     user.set('password', data.password);
    try {
      let userResult = await user.signUp();
      console.log('User signed up', userResult);
    } catch (error) {
      console.error('Error while signing up user', error);
    }
  }