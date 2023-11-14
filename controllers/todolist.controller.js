const { TodoLists, Users } = require("../models");
// const { use } = require("../routes");

module.exports = {
  createNewTodo: async (req, res) => {
    try {
      const user = await Users.findOne({
        where: { id: req.params.userId },
      });

      if (!user) {
        return res.status(401).json({
          message: "Unauthorized user",
        });
      } else {
        const data = req.body;

        const newTodo = await TodoLists.create({
          todo_name: data.todo_name,
          status: data.status,
          description: data.description,
          user_access: req.params.userId,
        });

        res.status(201).json({
          message: `Success to created data ${data.todo_name}`,
          newTodo,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "Unable to create data",
        error: error.message,
      });
    }
  },
  getAllTodo: async (req, res) => {
    try {
      const user = await Users.findOne({
        where: { id: req.params.userId },
      });

      if (!user) {
        res.status(401).json({
          message: "Unauthorized",
        });
      } else {
        const todos = await TodoLists.findAll({
          where: { user_access: req.params.userId },
        });
        res.status(200).json({
          message: "Successfully get all data todos",
          name: user.username,
          todos,
        });
      }
    } catch (error) {
      console.log("Error: ", error);
      res.status(404).json({
        message: "Not found, data not available",
        error: error.message,
      });
    }
  },

  getTodoById: async (req, res) => {
    try {
      const user = await Users.findOne({
        where: { id: req.params.userId },
      });

      if (!user) {
        res.status(401).json({
          message: "Unauthorized",
        });
      } else {
        const todo = await TodoLists.findAll({
          where: { id: req.params.todoId },
        });

        res.status(200).json({
          message: "Succes get data",
          todo,
        });
      }
    } catch (error) {
      console.log("Error: ", error);
      res.status(404).json({
        message: "Not found, data not available",
        error: error.message,
      });
    }
  },
  updateTodo: async (req, res) => {
    try {
      const user = await Users.findOne({
        where: { id: req.params.userId },
      });

      if (!user) {
        res.status(401).json({
          message: "Unauthorized",
        });
      } else {
        const data = req.body;

        const todo = await TodoLists.update(
          {
            todo_name: data.todo_name,
            status: data.status,
            description: data.description,
          },
          {
            where: {
              id: req.params.todoId,
            },
          }
        );

        res.status(202).json({
          message: `Request to update todo ${req.params.todoId} full filled`,
          todo,
        });
      }
    } catch (error) {
      console.log("Error: ", error);
      res.status(404).json({
        message: "Cannot update data",
        error: error.message,
      });
    }
  },
  deleteTodoById: async (req, res) => {
    try {
      const user = await Users.findOne({
        where: { id: req.params.userId },
      });

      if (!user) {
        res.status(401).json({
          message: "Unauthorized",
        });
      } else {
        const del = TodoLists.destroy({
          where: {
            id: req.params.todoId,
          },
        });

        res.status(202).json({
          message: `Accepeted to delete data ${del}`,
          del,
        });
      }
    } catch (error) {
      console.log("Error: ", error);
      res.status(404).json({
        message: "Cannot delete data",
        error: error.message,
      });
    }
  },
  deleteAllTodo: async (req, res) => {
    try {
      const user = await Users.findOne({
        where: { id: req.params.userId },
      });

      if (!user) {
        res.status(401).json({
          message: "Unauthorized",
        });
      } else {
        const deleteAll = await TodoLists.destroy({
          where: {},
        });

        res.status(200).json({
          message: "All todo lists deleted successfully",
          deleteAll,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
};
