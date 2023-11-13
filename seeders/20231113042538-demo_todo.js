"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("TodoLists", [
      {
        todo_name: "belajar",
        status: true,
        description: "belajar apa aja yang penting belajar",
        user_access: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("TodoLists", null, {});
  },
};
