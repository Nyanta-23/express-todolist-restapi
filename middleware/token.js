const jwt = require("jsonwebtoken");
require("dotenv").config();

const KEY = process.env.KEY;

const verifyToken = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.json({
      message: "Undefined Header",
    });
  }

  const token = header.split(" ")[1];

  if (!token) {
    return res.json({
      message: "Invalid token",
    });
  }

  const payload = jwt.verify(token, KEY);
  req.payload = payload;

  next();
};

module.exports = verifyToken;
