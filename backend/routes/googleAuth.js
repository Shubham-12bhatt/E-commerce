const express = require('express');
const googleAuthRouter = express.Router();
const passport = require('passport');


googleAuthRouter.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);


googleAuthRouter.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: 'http://localhost:5173/login'
  }),
  (req, res) => {

    const { token } = req.user;

    res.redirect(`http://localhost:5173/google-success?token=${token}`);
  }
);

module.exports = googleAuthRouter;
