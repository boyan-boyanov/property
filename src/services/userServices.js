import Parse from 'parse/dist/parse.min.js';

const PARSE_APPLICATION_ID = '62MiP8VdJxtvy35FJ52VYDC5LDKk5asRiGMoiLPd';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'V5XM1OCDkmjasMI30CAnMnpsgkIBHMvzTNfoCBO4';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export async function register(data) {
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

export async function loggedIn(data) {
    console.log(data);
    try {
        let user = await Parse.User.logIn(data.name, data.password);
        localStorage.setItem("userData",JSON.stringify(user));
        console.log('Comment created', user);
    } catch (error) {
        console.error('Error while creating Comment: ', error);
    }
}

export async function logout(){
    if(localStorage.getItem('userData')){
        let userData = JSON.parse(localStorage.getItem('userData'))
        console.log(userData.username);
        
    }else{
        console.log('not user data');
    }
    
        // try {
        //   let user = await Parse.User.logIn(userData.username,'#Password123');
        //   const currentUser = Parse.User.current();
        //   console.log('Current logged in user', currentUser);
        // } catch (error) {
        //   console.error('Error while logging in user', error);
        // }
    
}

export async function doUserLogOut() {
    try {
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        alert('Success! No user is logged in anymore!');
      }
      // Update state variable holding current user
      getCurrentUser();
      localStorage.removeItem('userData')
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };
  
  const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    // Update state variable holding current user
    //setCurrentUser(currentUser);
    return currentUser;
  };