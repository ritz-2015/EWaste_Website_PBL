const UserRepository = require("../repository/user-repository");
const jwt =require('jsonwebtoken')
const {JWT_KEY} =require('../config/serverConfig')
const bcrypt = require('bcrypt');
const {cookie} = require('cookie-parser')

class UserService{

    constructor(){
        this.userRepository = new UserRepository();
    }
    
    async create(data){
        try{
            const user = await this.userRepository.create(data);
            return user;
        } catch(error){
            console.log("Something Went wrong in service layer.");
            throw error;
        }
    }

    async signIn(email, plainPassword){
       try {
             //STEP 1:- Check for the Email in your database
            const user =  await this.userRepository.getByEmail(email);
            if (!user) {
                throw new Error("User not found");
            }
            console.log("USER ::- ", user)
            //STEP 2:- Check If User password is equal to plain Password which has been inserted
            const passwordMatch = this.checkPassword(plainPassword, user.password);
            
            if(!passwordMatch){
                console.log("Password Doesn't Match");
                throw {error: 'Incorrect Password'};
            }

            //Step 3 -> if password match then create a token and sent it to the user
            const newJWT = this.createToken({email: user.email, id: user.id});
            console.log("NEW TOKEN:- ", newJWT);
            return newJWT;
       } catch (error) {
            console.log(error);
            console.log("Error At Sign IN Process.")
            throw error;
       }
    } 

    createToken(user){
        try{
            var token = jwt.sign(user,JWT_KEY, {expiresIn:'5d'});
            return token;
        } catch(error){
            console.log("Error occurs at creating Token.");
            throw error;
        }
    }

    verifyToken(user){
        try{
            var response = jwt.verify(user,JWT_KEY);
            if (!JWT_KEY) {
                throw new Error('JWT_KEY is not defined');
            }
    
            // Verify if user is a valid JWT token
            if (!user) {
                throw new Error('User token is empty or undefined');
            }
    
            return response;
        } catch(error){
            console.log("USER: ",user)
            console.log("Response: ",response);
            console.log("JWT_KEY:- ", JWT_KEY);
            console.log("Error occurs at verifing token.");
            throw error;
        }
    }

    checkPassword(userInputPlainPassword, encryptedPassword){
        try{
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
        } catch(error){
            console.log("Something went wrong in password comparison");
            throw error;  
        }
    }

   async isAuthenticated(token) {
    try {
        // Verify the token
        const decodedToken = this.verifyToken(token);

        console.log("Decoded Token ", decodedToken);
        // If token verification fails, throw an error
        if (!decodedToken) {
            throw new Error("Invalid token");
        }

        // Retrieve the user using the user ID from the token
        const user = await this.userRepository.getById(decodedToken.id);

        // If user not found, throw an error
        if (!user) {
            throw new Error("User not found for the given token");
        }

        // Return the user's name
        return user;
    } catch (error) {
        console.error("Error in isAuthenticated:", error);
        throw error;
    }
}


 

}

module.exports = UserService;