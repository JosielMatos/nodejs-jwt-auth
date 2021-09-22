const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { createTokens, validateToken } = require('../middlewares/jwt');
router.get("/", (req, res) => {
    res.send("Great!")
})

router.post("/register", (req, res) => {
  const { username, password } = req.body;

  User.create({
    username: username,
    password: password,
  }).then(() => {
    res.json('Done! User registered!')
  }).catch(err => {
    if (err) res.status(400).json({error: err});
  })
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({username: username})
  
  if (!user) return res.status(400).json({error: "User does not exist."});

  const dbPassword = user.password;

  bcrypt.compare(password, dbPassword).then(match => {
    if (!match) {
      res.status(400).json({error: "Wrong password and username combination!"})
    } else {
      const accessToken = createTokens(user)

      res.cookie("access-token", accessToken, {
        maxAge: 60*60*24*30*1000,
      })

      res.json('Wooooo!!! Logged In!')
    }
  })


});

router.get("/profile", validateToken, (req, res) => {
  res.json("profile");
});

module.exports = router;