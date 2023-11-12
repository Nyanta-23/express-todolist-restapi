"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("todo_lists", [
      {
        todo: "belajar1",
        description: "belajar apa aja yang penting belajar",
        status: true,
        user_access: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todo_lists", null);
  },
};
