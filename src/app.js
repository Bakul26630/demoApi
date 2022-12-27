const express = require("express"); // importing express in our app
const app = express(); // Creating an express app

app.use(express.json()); // allowing to use json

app.use(express.urlencoded());

// Specifying the port
const port = process.env.PORT || 5500;

const StudentRouter = require("./routers/StudentRoutes");
app.use(StudentRouter);

// app is ruuning at port=5500
app.listen(port, () => {
  console.log(`Connection is successfull at ${port}`);
});
