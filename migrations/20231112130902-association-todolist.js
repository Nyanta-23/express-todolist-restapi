"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("todo_lists", "user_access", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "users",
        },
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("todo_lists", "todo_lists_ibfk_1");
    await queryInterface.removeIndex("todo_lists", "user_access");
  },
};
