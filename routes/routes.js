const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth')
const { validateToken } = require('../middlewares/jwt')

router.get("/", (req, res) => {
  res.send("Great!");
});

router.post("/register", authController.postRegister);
router.post("/login", authController.postLogin);

router.get("/profile", validateToken, (req, res) => {
  res.json("profile");
});

module.exports = router;
