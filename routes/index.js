const express = require("express");
const route = express.Router();
const registerRoute = require('./register.route');

route.get("/", (req, res) => {

  res.json({
    message: "Welcome to todolist app"
  })
});

route.use('/register', registerRoute);



module.exports = route;