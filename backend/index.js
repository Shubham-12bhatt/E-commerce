const PORT = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer')
const path = require('path');
const cors = require('cors');
const { error } = require('console');

app.use(express.json());


app.use(cors());
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shubham:shubham@cluster0.yhmzooz.mongodb.net/e-commerce"
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

connectDB();

app.get("/", (req,res,) => {
  res.send("Express App is running")
})

//Image storage Engine 
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null,`${file.fieldname}_${Date.now()} ${path.extname(file.originalname)}`);
  }
})

const upload = multer({
  storage,
})

//creating upload endpoint for images
app.use('/images',express.static('upload/images'))


app.post("/upload", upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url:`http://localhost:${PORT}/images/${req.file.filename}`
    })
})


const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  available: {
    type: Boolean,
    default: true
  },
}
  
)
app.post('/addproduct', async (req, res) => {
  try {
    let last = await Product.findOne().sort({ id: -1 });
    let id = last ? last.id + 1 : 1;
    // let id;
    // if (products.length > 0) {
    //   let last_product_array = products.slice(-1);
    //   let last_product = last_product_array[0];
    //   id = last_product.id + 1;
    // }
    // else {
    //   id = 1;
    // }
    const { name, image, category, new_price, old_price } = req.body;
    const product = new Product({
      id, name, image, category, new_price, old_price
    })

    await product.save();
    console.log(product);
    res.json({
      success: 1,
      name: name,
    })
    
  }
  catch(err) {
    console.log("error while adding product", err);
  }
}
)

app.post('/removeproduct', async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log('removed');
    res.json({
      success: true,
      name: req.body.name
    })
  }
  catch (err) {
    console.log("error while removing product", err);
  }
})


app.get('/allproducts', async (req, res) => {
  let products = await Product.find()
    res.json(products);
})


const Users = mongoose.model('Users', {
  name: {
    type: String,
    
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    
  },
  cartData: {
    type: Object
  },
  date: {
    type: Date,
    default: Date.now()
  }


});

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

//creating end point for new collection
 
app.get('/newcollections', async (req, res) => {
  let products = await Product.find({});
  let newcollections = products.slice(1).slice(-8);
  console.log("New Collections fetched");
  res.send(newcollections);
})

//creating endpoint for popular in women section
app.get('/popular', async (req, res) => {
  let products = await Product.find({ category: "women" });
  let popular = products.slice(0, 4);
  console.log('popular in women fetched');
  res.send(popular);
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
