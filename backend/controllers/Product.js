const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
   try {
    let last = await Product.findOne().sort({ id: -1 });
    let id = last ? last.id + 1 : 1;
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
  
exports.removeProduct = async (req, res) => {
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
  
}
    
exports.getAllProducts = async (req, res) => {
  try {
    let products = await Product.find()
    res.json(products);
  }
  catch (err) {
    console.log("error while fetching products", err);
  }
  
}
exports.getNewCollections = async (req, res) => {
  try {
    let products = await Product.find({}).sort({date : -1}).limit(8);
    // console.log("New Collections fetched ");
    res.send(products);
  }
  catch (err) {
    console.log("error while fetching products", err);
  }
}
exports.getPopularWomen = async (req, res) => {
  try {
    
    let products = await Product.find({ category: "women" });
    let popular = products.slice(0, 4);
    // console.log('popular in women fetched');
    res.send(popular);
  }
  catch (err) {
    console.log("error while fetching products", err);
  }
}
