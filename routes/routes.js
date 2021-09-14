const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

router.get("/", (req, res) => {
    res.send("Great!")
})

router.post("/register", (req, res) => {
  const { username, password } = req.body;
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