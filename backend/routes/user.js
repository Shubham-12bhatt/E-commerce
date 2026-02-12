const express = require('express');
const UserRouter = express.Router();
const {signup, login, otpVerify} = require('../controllers/User');


UserRouter.post('/signup', signup);
UserRouter.post('/otp-verify', otpVerify);
UserRouter.post('/login', login);


module.exports = UserRouter;
