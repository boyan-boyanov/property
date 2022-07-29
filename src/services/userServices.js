import Parse from 'parse/dist/parse.min.js';

const PARSE_APPLICATION_ID = '62MiP8VdJxtvy35FJ52VYDC5LDKk5asRiGMoiLPd';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'V5XM1OCDkmjasMI30CAnMnpsgkIBHMvzTNfoCBO4';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


export async function register(data) {
    console.log(data);
    
    const autoLoginData = {
        name: data.name,
        password: data.password
    }
    const user = new Parse.User();
    user.set('username', data.name);
    user.set('email', data.email);
    user.set('password', data.password);
    try {
        let userResult = await user.signUp();
        console.log('User signed up', userResult);
      // const loginData = loggedIn(autoLoginData)
        return autoLoginData
    } catch (error) {
        return "false";
    }
}

export async function loggedIn(data) {
        console.log(data);
    try {
        let user = await Parse.User.logIn(data.name, data.password);
        localStorage.setItem("userData", JSON.stringify(user));
        return JSON.stringify(user);
       
    } catch (error) {
        return 'false';
    }
}

export async function doUserLogOut() {
    
    try {
        await Parse.User.logOut();
        // To verify that current user is now empty, currentAsync can be used
        const currentUser = await Parse.User.current();
        if (currentUser === null) {
            console.log('Success! No user is logged in anymore!');
            
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


export async function updateUser(bodyData) {
    try {
        let owner = '';
        let token = '';
        if (localStorage.getItem('userData')) {
            const userData = JSON.parse(localStorage.getItem('userData'));
            owner = userData.objectId;
            token = userData.sessionToken;
        } else {
            throw new Error('There is not logged user')
        }
        const config = {
            method: 'PUT',
            headers: {
                'X-Parse-Application-Id': '62MiP8VdJxtvy35FJ52VYDC5LDKk5asRiGMoiLPd',
                'X-Parse-REST-API-Key': '53WdfHoxCS9NGG50G6C2IWCHsUBjOfCt2LnDVasQ',
                'X-Parse-Session-Token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)

        }
        let response = await fetch(`${PARSE_HOST_URL}/users/${owner}`, config);
        return await response.json();
        
    } catch (error) {
         console.error('Error while retrieving user', error);
    }
}



const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    // Update state variable holding current user
    //setCurrentUser(currentUser);
    return currentUser;
};

export async function getUserData() {
    try {
        let owner = ''
        if (localStorage.getItem('userData')) {
            owner = JSON.parse(localStorage.getItem('userData')).objectId
        } else {
            throw new Error('There is not logged user')
        }
        let response = await fetch(`${PARSE_HOST_URL}/users/${owner}`, {
            headers: {
                'X-Parse-Application-Id': '62MiP8VdJxtvy35FJ52VYDC5LDKk5asRiGMoiLPd',
                'X-Parse-REST-API-Key': '53WdfHoxCS9NGG50G6C2IWCHsUBjOfCt2LnDVasQ'
            }
        });
        return await response.json();
    } catch (err) {
        console.error(err);
        // Handle errors here.
    }
}