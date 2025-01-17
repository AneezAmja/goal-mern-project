const express = require("express");
const dotenv = require("dotenv").config();
const {errorHandler} = require("./middleware/errorMiddleware")
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')
const colors = require('colors')

connectDB()
const app = express();

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
