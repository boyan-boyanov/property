# BGProperties
My very first React project. 
The project is a basic version of a classifieds site limited to posting real estate ads. The properties are divided into 2 groups (sales, rent) and three categories (apartments, offices, houses).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:
### `npm start`

try project on: https://bgproperties-c3a82.web.app/

## Architecture

My project has 4 parts.
 1. Components
    - 404
    - Auth
       - login
       - register
    - catalog
    - card (using for every view with cards)
    - core
       - header
       - footer
    - Create
    - Details
    - Edit
    - Home
    - Guards
    - Search
    - UserProfile
 2. Contexts
    - UserContext
        hold info for logged user    
 3. Services
    - Property services
    - User services
    - home page    
 4. Hooks

## All users access
- home page
- catalog
- details of items
- search
- read comments

## Not logged in users access
- All users access
- login
- register

## Logged in users access
- All users access
- Add new offer
- Edit own offers
- Delete own offers
- Create comments for properties
- Personal profile page
- Update own profile with photo
- Saving properties to favorites
- Remove properties from favorites


# Technologies and stuff

## Frontend
- HTML
- CSS
- Fontawsome
- React 18.2.0


## Backend
- Back4app

To start the application install all dependecies for the client and the server with npm install. Start the server with npm start. Than navigate to http://localhost:3000/ in the browser.
