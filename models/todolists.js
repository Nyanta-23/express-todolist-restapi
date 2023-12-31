'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoLists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TodoLists.init({
    todo_name: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    user_access: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TodoLists',
  });
  return TodoLists;
};