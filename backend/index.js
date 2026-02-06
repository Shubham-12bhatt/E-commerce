const PORT = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer')
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');
const productRouter = require('./routes/product');
const UserRouter = require('./routes/user');


app.use(express.json());
app.use(cors());
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

app.post('/signup', async (req,res) => {
  let check = await Users.findOne({
    email:req.body.email
  })
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "existing user found with same email address"
    })
  }
    let cart = {};
    for (let i = 0; i < 300; i++){
      cart[i] = 0;
    }
    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,


    })
  await user.save();


  const data = {
    user: {
      id:user.id
    }
  }
  const token = jwt.sign(data, 'secret_ecom');
  res.json({
    success: true,
    token
  }) 
})

app.post('/login', async (req,res) => {
  let user = await Users.findOne({
    email:req.body.email
  })
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id
        }
      }
      const token = jwt.sign(data, 'secret_ecom')
      res.json({
        success: true,
        token
      })
    }
    else {
      res.json({
        success: false,
        errors:"Wrong Password"
      })
    }
  }
  else {
    res.json({
      success: false,
      errors: 'Wrong Email-ID'
    })
  }
})

//creating middleware to fetch user
const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send({
      errors:"please authenticate using valid token"
    })
  }
  else {
    try {
      const data = jwt.verify(token, 'secret_ecom');
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({
        errors:"please authenticate using a valid token"
      })
    }
  }
}


//creating endpoint for adding products in cart
app.post('/addtocart', fetchUser,async (req, res) => {
  let userData = await Users.findOne({
    _id: req.user.id
  });
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate({ _id: req.user.id }, {
    cartData:userData.cartData
  });
  res.send("Added");
})

//creating endpoint to remove product from cartdata
app.post('/removefromcart', fetchUser, async (req, res) => {
  let userData = await Users.findOne({
    _id: req.user.id
  });
  if (userData.cartData[req.body.itemId] > 0) {
    userData.cartData[req.body.itemId] -= 1;
  }
  await Users.findOneAndUpdate({ _id: req.user.id }, {
    cartData:userData.cartData
  });
  res.send("removed");
})

//creating endpoint for cartdata
app.post('/getcart', fetchUser, async (req, res) => {
   let userData = await Users.findOne({
    _id: req.user.id
   });
  res.json(userData.cartData);
})


app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server running on Port" + PORT)
  }
  else {
    console.log("errror while runnig server " + error)
  }
})
