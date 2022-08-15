'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      player1: {
        type: Sequelize.BOOLEAN
      },
      player2: {
        type: Sequelize.BOOLEAN
      },
      player1_data: {
        type: Sequelize.STRING
      },
      player2_data: {
        type: Sequelize.STRING
      },
      player1_choice: {
        type: Sequelize.STRING
      },
      player2_choice: {
        type: Sequelize.STRING
      },
      winner: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Rooms');
  }
};