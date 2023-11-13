const { Users } = require("../models");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const user = await Users.findAll({
        attributes: ["email", "first_name", "last_name"],
      });

      res.status(200).json({
        message: "Successfully get all data",
        data: user,
      });
    } catch (error) {
      console.error("Error while creating user data", error);
      res.status(400).json({
        message: "Bad Request, unable to create data",
        error: error.message,
      });
    }
  },

  addUser: async (req, res) => {
    try {
      const { email, username, password } = req.body;

      const newUser = await Users.create({
        username,
        email,
        password,
      });

      res.status(201).json({
        message: "Successfull create account",
        data: {
          name: `${newUser.first_name} ${newUser.last_name}`,
          email,
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
};
