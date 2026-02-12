const Users = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const transporter = require('../config/mailer');


exports.signup = async (req, res) => {
  try {
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



    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = Date.now() + 3 * 60 * 1000;
    console.log("GENERATED OTP:", otp);

    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      cartData: cart,
      otp,
      otpExpiry,
      isVerified: false
    })
    await user.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.body.email,
      subject: "Verify Your Email Address",
      text: `Your OTP is: ${otp}`
    }


    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "OTP sent successfully"
    });

  }
  catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      errors: "Internal Server Error"
    })
  }
}

exports.otpVerify = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await Users.findOne({
      email: email
    })
    if (!user) {
      return res.status(404).json({
        success: false,
        errors: "User not found"
      })
    }

    if (user.otp !== otp) {
      return res.status(400).json({
        success: false,
        errors: "Invalid OTP"
      })
    }

    if (user.otpExpiry < Date.now()) {
      return res.status(400).json({
        success: false,
        errors: "OTP has expired"
      })
    }

    user.isVerified = true;
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    const data = {
      user: {
        id: user.id
      }
    }
    const token = jwt.sign(data, process.env.JWT_SECRET);
    res.json({
      success: true,
      token,
      message: "User verified successfully"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      errors: "Internal Server Error"
    })
  }
}
















exports.login = async (req, res) => {
  let user = await Users.findOne({
    email: req.body.email
  })
  if (user) {
    const passCompare = await bcrypt.compare(req.body.password, user.password);
    if (passCompare) {
      const data = {
        user: {
          id: user.id
        }
      }
      const token = jwt.sign(data, process.env.JWT_SECRET)
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
