'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History_Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  History_Game.init({
    user_id: DataTypes.INTEGER,
    win: DataTypes.STRING,
    draw: DataTypes.STRING,
    lose: DataTypes.STRING,
    draw: DataTypes.STRING,
    type_player: DataTypes.STRING,
    level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'History_Game',
  });
  return History_Game;
};