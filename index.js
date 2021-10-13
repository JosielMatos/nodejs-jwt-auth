const express = require("express");
const app = express();
const mongoose = require('mongoose');
const connectDB = require("./config/database");
const session = require("express-session");
const logger = require("morgan");
const routes = require("./routes/routes");
const cookieParser = require("cookie-parser");

require("dotenv").config({ path: "./config/.env" });
connectDB();

app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//logging
app.use(logger("dev"));

const PORT = process.env.PORT || 5000;

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:5000`);
});
