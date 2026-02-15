require("dotenv").config();
const PORT = 4000;
const express = require('express');
const app = express();
const multer = require('multer')
const path = require('path');
const cors = require('cors');
const passport = require('passport');
require('./auth/google');
const connectDB = require('./config/db');
const productRouter = require('./routes/product');
const UserRouter = require('./routes/user');
const cartRouter = require('./routes/cart');
const googleAuthRouter = require("./routes/googleAuth");


app.use(express.json());
app.use(cors());
app.use(passport.initialize()); 
connectDB();
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null,`${file.fieldname}_${Date.now()} ${path.extname(file.originalname)}`);
  }
})
const upload = multer({
  storage,
})


app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url:`http://localhost:${PORT}/images/${req.file.filename}`
    })
})

app.use('/products', productRouter);
app.use('/user',UserRouter);
app.use('/cart', cartRouter);
app.use('/', googleAuthRouter);



app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log("Server running on Port" + process.env.PORT)
  }
  else {
    console.log("errror while runnig server " + error)
  }
})
