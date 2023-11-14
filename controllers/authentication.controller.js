const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  register: async (req, res) => {
    try {
      const { email, username } = req.body;

      let password = req.body.password;

      const saltRounds = 10;
      const hashPassword = bcrypt.hashSync(password, saltRounds);

      const newUser = await Users.create({
        username,
        email,
        password: hashPassword,
      });

      res.status(201).json({
        message: "Successfull create account",
        data: {
          username: newUser.username,
          email: newUser.email,
        },
      });
    } catch (error) {
      console.error("Error while creating user data", error);
      res.status(400).json({
        message: "Bad Request, unable to create data",
        error: error.message,
      });
    }
  },

  login: async (req, res) => {
    try {
      const data = req.body;

      const user = await Users.findOne({ where: { email: data.email } });

      if (!user) {
        return res.status(404).json({
          message: "Account not found",
        });
      } else {
        if (!bcrypt.compareSync(data.password, user.password)) {
          return res.status(500).json({
            message: "Wrong Password",
          });
        }

        const token = jwt.sign({ email: data.email }, process.env.KEY);

        return res.status(200).json({
          message: "Login Success",
          token,
        });
      }
    } catch (error) {
      console.error("Error while authorize user data", error);
      res.status(401).json({
        message: "Unauthorized data",
        error: error.message,
      });
    }
  },
};
