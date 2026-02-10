const Users = require('../models/User');

exports.addtoCart = async (req, res) => {
  let userData = await Users.findOne({
    _id: req.user.id
  });
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate({ _id: req.user.id }, {
    cartData:userData.cartData
  });
  res.send("Added");
}

exports.getCart = async (req, res) => {
  let userData = await Users.findOne({
    _id: req.user.id
  });
  res.json(userData.cartData);
}

exports.removefromCart = async (req, res) => {
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
}