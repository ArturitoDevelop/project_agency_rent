'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({User,Post}) {
      this.belongsTo(User,{foreignKey: 'user_id'})
      this.belongsTo(Post,{foreignKey: 'post_id'})
    }
  }
  Favorite.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};