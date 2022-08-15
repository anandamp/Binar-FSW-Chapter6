'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rooms.init({
    player1: DataTypes.BOOLEAN,
    player2: DataTypes.BOOLEAN,
    player1_data: DataTypes.STRING,
    player2_data: DataTypes.STRING,
    player1_choice: DataTypes.STRING,
    player2_choice: DataTypes.STRING,
    winner: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rooms',
  });
  return Rooms;
};