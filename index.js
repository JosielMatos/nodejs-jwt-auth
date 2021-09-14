const express = require("express");
const app = express();
const {User} = require('./models/User')

app.use(express.json());

app.post("/register", (req, res) => {
  res.json("register");
});

app.post("/login", (req, res) => {
  res.json("login");
});

app.get("/profile", (req, res) => {
  res.json("profile");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:5000`);
});
