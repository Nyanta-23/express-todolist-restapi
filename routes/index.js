const express = require("express");
const route = express.Router();
const authenticationRoute = require("./authentication.route");
const todolist = require("./todolist.route");

route.get("/", (req, res) => {
  // console.log("token :", req.header.authorization);

  const test = req.header.authorization;

  res.json({
    message: "Welcome to todolist app",
    test: test,
  });
});

route.use(authenticationRoute);
route.use("/users", todolist);

module.exports = route;
