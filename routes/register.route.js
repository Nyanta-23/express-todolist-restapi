const express = require("express");
const route = express.Router();

const { getAllUser, addUser } = require("../controllers/register.controller");

route.get("/", addUser);

module.exports = route;
