const express = require("express");
const route = express.Router();
const authenticationRoute = require("./authentication.route");
const todolist = require("./todolist.route");

route.get("/", (req, res) => {
  res.json({
    message: "Welcome to todolist app",
  });
});

route.use(authenticationRoute);
route.use("/users", todolist);

module.exports = route;
