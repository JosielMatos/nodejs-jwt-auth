const express = require('express');
const router = express.Router();
const User = require('../models/User')
const jwt = require('jsonwebtoken')

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

  res.json('Wooooo!!! Logged In!')
});

router.get("/profile", (req, res) => {
  res.json("profile");
});

module.exports = router;