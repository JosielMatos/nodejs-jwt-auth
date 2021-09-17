const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User')
const jwt = require('jsonwebtoken')

router.get("/", (req, res) => {
    res.send("Great!")
})

router.post("/register", (req, res) => {
  // const { username, password } = req.body;

  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  bcrypt.hash(user.password, 10).then((hash) => {
    user.create({
      username: username,
      password: hash,
    })  // hash on model ???
  }).then(() => {
    res.json('Done! User registered!')
  }).catch(err => {
    if (err) res.status(400).json({error: err});
  })
});

router.post("/login", (req, res) => {
  jwt.sign(
      //Todo
  );
});

router.get("/profile", (req, res) => {
  res.json("profile");
});

module.exports = router;