const express = require("express");
const app = express();
const connectDB = require('./config/database')
const routes = require('./routes/routes')

require("dotenv").config({ path: "./config/.env" });
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:5000`);
});
