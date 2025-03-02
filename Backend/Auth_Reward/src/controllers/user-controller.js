const UserService = require('../services/user-service');
const cookies =require('cookie-parser')
const userService = new UserService();

const create = async (req,res) =>{
    try{
        const response = await userService.create({
            name : req.body.name,
            email: req.body.email,
            password: req.body.password,
            points: req.body.points
         }); 
        
         return res.status(201).json({
            message: 'Successfully created a new user.',
            data: response,
            success: true,
            err: {}
        })
    } catch(error){
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        })
    }
}

const signIn = async (req,res)=>{
    try{
        console.log("Started");
        const response = await userService.signIn(req.body.email, req.body.password);
        res.cookie('token',response);
        console.log("Response Id ", response)
        return res.status(201).json({
            message: 'Sucessfully SignIN',
            data: response,
            success: true
        })
    } catch(error){
        console.log(error);
        console.log("Error At Controller Layer.")
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        })
    }
}

const isAuthenticated = async (req,res) =>{
    try{
        console.log("REQUEST COOKE TOKEN:- ",req.cookies);
        const token = req.cookies.token; // Access token from cookies; 
        if(!token){
            console.log("We need to provide JSON Token")
        }
        console.log("Token:-> ", token);
        const response =await userService.isAuthenticated(token);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: "User is authenticated and token is Valid"
        });
    }catch(error){
        console.log(error);
        console.log("Error At Controller Layer.")
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        })
    }
}




module.exports= {
    create,
    signIn,
    isAuthenticated
}