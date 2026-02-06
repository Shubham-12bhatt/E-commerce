const express = require("express");
const productRouter = express.Router();
const {addProduct} = require('../controllers/Product')
const {removeProduct} = require('../controllers/Product')


productRouter.post('/addproduct', addProduct);
productRouter.post('/removeproduct', removeProduct);
productRouter.get('/allproducts', getAllProducts);
productRouter.get('/newcollections', getNewCollections);
productRouter.get('/popular', getPopularWomen);







module.exports = productRouter;
