# Tasty Hub

### Client-side Live Link: https://tasty-hub-b9f0c.web.app/

## Technologies
- Firebase based authentication.
- Crud operations are done with express.js.
- MongoDB is used for database.

## Features:
- In this website, an user can see their desired brand's food. Also they can know more details about foods.
- User can log in with email and password or with google.
- They can also customize the theme between light or dark mode.
- The logged in user can add any products of any brand.
- User can also update any existing product.
- After logging in user can see his/her profile picture and name at the navbar.
- User can also add their desired product to the cart and also can delete the products from the cart.


## To Run Locally
### Client Side
1. Clone the application.
2. Create a .env.local file
3. In this file, you have to add your firebase variables as follows:
   VITE_APIKEY=value of apiKey from your firebase configuration <br/> 
VITE_AUTHDOMAIN=value of authDomain from your firebase configuration <br/>
VITE_PROJECTID=value of projectId from your firebase configuration <br/>
VITE_STORAGEBUCKET=value of storageBucket from your firebase configuration <br/>
VITE_MESSAGINGSENDERID=value of messagingSenderId from your firebase configuration <br/>
VITE_APPID=value of appId from your firebase configuration <br/>
4. In your terminal, run the following command: <br/>
    npm install <br/>
    npm run dev

### Server Side
1. Clone the server from: https://github.com/Orchizakia00/tasty-hub-server
2. Create a .env file.
3. In this file, you have to add the followings: <br/>
DB_USER=replace with your username <br/>
DB_PASS=replace with your password <br/>
4. In your terminal, run the following commands: <br/>
    npm install <br/>
    nodemon index.js
