const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const fs = require('fs');


// Register a new user
// /api/users
const registerUser = asyncHandler(async (req,res)=>{
    const {name, email, password} = req.body

    // Validation
    if(!name || !email ){
        res.status(400)
        throw new Error("Please include all fields")
    }
    const emailLowerCase = email.toLowerCase();

    // Find if user already exists

    const userExists = await User.findOne({email: emailLowerCase})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)


    // Creaete User
    const user = await User.create({
        name,
        email: emailLowerCase,
        password: hashedPassword,
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email,
            avatarPic: '',
            bio:'',
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new error('Invalid user data')
    }

})

// Generate Token
const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

// Login a user
// /api/users/login
const loginUser = asyncHandler(async(req,res)=>{

    const {email, password} = req.body
    const user = await User.findOne({email})

    // Check user and password match
    if(user && (await bcrypt.compare(password,user.password))){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email:user.email,
            avatarPic: user.avatarPic,
            bio:'',
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error ('Invalid credentials')
    }
})

// Get current user
// /api/users/me
// Private
const getMe = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.user.id)
    res.status(200).json(user)
})

// Get all users

const getUsers = asyncHandler(async (req, res)=>{
    const users = await User.find();
    res.status(200).json(users)
})

const updateProfile = asyncHandler(async (req, res)=>{

        const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {new:true});
        console.log(req.user.id)
        console.log(req.body)
        res.status(200).json(updatedUser)


})

// const uploadImg = asyncHandler(async (req, res) =>{
//     const updatedImg = await User.
// })

module.exports = {
    registerUser,
    loginUser,
    getMe,
    getUsers,
    updateProfile
}