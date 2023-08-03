# ecommerce-thrift-website

(in progress, due Aug 4th)

The purpose of this application was to add a functional interface and e-commerce site for "Sassy's Thrift" in Birmingham.  

### **Tools Used:**
* `React` For rendering jsx elements and creating UI
* `Material UI` For styling css components
* `Npm` Package management and frontend server management
* `Express` Establishing backend server REST API routing endpoints
* `MongoDB` SQL database for storing data and limit data access to specific IP addresses
* `Mongoose` Data Object Modeling with MongoDB and connection to MongoDB database
* `CryptoJS` Credential encryption and decrpytion
* `JsonWebToken` Establishing JSON web signatures for user authentication
* `DotEnv` Loads values from .env while hiding secret keys/values
* `.env` Storing secret keys/values
* `PostMan` To verfiy and debug endpoint routing
* `NodeMon` Live refreshing of changes to Node server
* `Redux` State managment tool, specifically used for Cart and Login state upon reloading page

### Security:
We did not want to save the explicit passwords in our DB, so we encrypt them before saving them to MongoDB. 
We use the "AES" hashing algorithm through CryptoJS. 
We save the secret key we need to decrypt in our .env secret file. 
Additionally, when using the "login" route, we return all of the values for the user except the encrypted password key as an extra precaution. 
Give all logged in users a JSON Web Token, that is used to verify the ID of users when they are attempting to perform actions, such as access their cart. 
We keep the "id" of a user as well as the "isAdmin" property in the web token to decide if a user meets the credentials to perform actions.
An "admin" can perform any action. The security token is currently set to expire after 3 days, after that, a user would be require to login again.
We use some middleware to verify the JSON Web Token. 
`verifyToken()` checks if a token exists as well as if it's valid (for instance, making sure it isn't expired). 
If everything checks out, a new request and response are used to continue the route. `verifyTokenAndAuthorization()` actually checks if the current user matches the user in the JSON Web Token. `verifyTokenAndAdmin()` is only used for admin actions and checks the token's "isAdmin" status.
In order to troubleshoot with postman, you have to manually pass the access token from loggin in into the headers for the request. 
