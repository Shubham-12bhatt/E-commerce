const PORT = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer')
const path = require('path');
const cors = require('cors');

app.use(express.json());


app.use(cors());
mongoose.connect("mongodb+srv://shubham:shubham@cluster0.yhmzooz.mongodb.net/e-commerce")


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
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    }
    else {
      id = 1;
    }
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







app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server running on Port" + PORT)
  }
  else {
    console.log("errror while runnig server " + error)
  }
})
