"use strict";

const category = require("../models/category");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      { category: "housing", created_at: new Date(), updated_at: new Date() },
      {
        category: "transportation",
        created_at: new Date(),
        updated_at: new Date(),
      },
      { category: "food", created_at: new Date(), updated_at: new Date() },
      {
        category: "healthcare",
        created_at: new Date(),
        updated_at: new Date(),
      },
      { category: "insurance", created_at: new Date(), updated_at: new Date() },
      { category: "debt", created_at: new Date(), updated_at: new Date() },
      {
        category: "personal care",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category: "entertainment",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category: "savings & investments",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category: "miscellaneous",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
