const express = require("express");
const path = require('path')
const dotenv = require("dotenv").config({path:path.resolve(__dirname, '../.env')});
const colors = require('colors')
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require('./config/db')
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const multer = require("multer");



//Connect to DB
connectDB()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));



// multer
// const memoStorage = multer.memoryStorage();
// const upload = multer({ memoStorage });

// app.post("/addPicture", upload.single("pic"), async (req, res) => {
//     const file = req.file;
//     const imageRef = ref(storage, file.originalname);
//     const metatype = { contentType: file.mimetype, name: file.originalname };
//     await uploadBytes(imageRef, file.buffer, metatype)
//       .then((snapshot) => {
//         res.status(200).send("uploaded!");
//       })
//       .catch((error) => console.log(error.message));
//   });




// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/posts', require('./routes/postRoutes'))
app.use('/api/posts', require('./routes/likeRoutes'))

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')))
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  })
} else {
  app.get('/', (_, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' })
  })
}

// Middlewares
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`)
})

