const Users = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
exports.signup = async (req, res) => {
  let check = await Users.findOne({
    email: req.body.email
  })
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "existing user found with same email address"
    })
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    cartData: cart,
  })
  await user.save();


  const data = {
    user: {
      id: user.id
    }
  }
  const token = jwt.sign(data, 'secret_ecom');
  res.json({
    success: true,
    token
  })
}


exports.login = async (req, res) => {
  let user = await Users.findOne({
    email: req.body.email
  })
  if (user) {
    const passCompare = bcrypt.compare(req.body.password, user.password);
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
        errors: "Wrong Password"
      })
    }
  }
  else {
    res.json({
      success: false,
      errors: 'Wrong Email-ID'
    })
  }
}
