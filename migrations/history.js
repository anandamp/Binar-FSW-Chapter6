'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('History_Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      win: {
        type: Sequelize.STRING
      },
      draw: {
        type: Sequelize.STRING
      },
      lose: {
        type: Sequelize.STRING
      },
      draw: {
        type: Sequelize.STRING
      },
      type_player: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('History_Games');
  }
};