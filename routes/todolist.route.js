const express = require("express");
const route = express.Router();
const token = require("../middleware/token");

const {
  createNewTodo,
  getAllTodo,
  getTodoById,
  updateTodo,
  deleteTodoById,
  deleteAllTodo,
} = require("../controllers/todolist.controller");

route.post("/:userId/todos", token, createNewTodo);
route.get("/:userId/todos", token, getAllTodo);
route.get("/:userId/todos/:todoId", token, getTodoById);
route.put("/:userId/todos/:todoId", token, updateTodo);
route.delete("/:userId/todos/:todoId", token, deleteTodoById);
route.delete("/:userId/todos", token, deleteAllTodo);

module.exports = route;