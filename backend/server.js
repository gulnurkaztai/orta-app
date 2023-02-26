const express = require("express");
const path = require('path')
const dotenv = require("dotenv").config({path:path.resolve(__dirname, '../.env')});
const colors = require('colors')
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require('./config/db')
const app = express();
const PORT = process.env.PORT;


//Connect to DB
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res)=>{
    res.status(200).json({message: "Welcome"})
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/posts', require('./routes/postRoutes'))
app.use('/api/posts', require('./routes/likeRoutes'))
// Middlewares
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`)
})

