'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('History_games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      playedAt: {
        type: Sequelize.DATE
      },
      result: {
        type: Sequelize.STRING
      },
      type_player: {
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
    await queryInterface.dropTable('History_games');
  }
};