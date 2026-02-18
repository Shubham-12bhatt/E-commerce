const express = require("express");
const transporter = require("../config/mailer");
const subscribeRouter = express.Router();
subscribeRouter.post("/", async (req, res) => {
  const { email } = req.body;
  try{
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for Subscribing 🎉",
      html: `
        <h2>Thank you for subscribing!</h2>
        <p>Here is your 10% discount code:</p>
        <h3 style="color:pink;">WELCOME10</h3>
      `
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Email failed" });
  }
});

module.exports = subscribeRouter;
