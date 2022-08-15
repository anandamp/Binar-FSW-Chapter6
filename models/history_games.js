'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History_games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  History_games.init({
    user_id: DataTypes.INTEGER,
    playedAt: DataTypes.DATE,
    result: DataTypes.STRING,
    type_player: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'History_games',
  });
  return History_games;
};