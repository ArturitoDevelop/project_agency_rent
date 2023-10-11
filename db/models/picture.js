

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    static associate({ Post }) {
      this.belongsTo(Post, { foreignKey: 'post_id' })
      // define association here
    }
  }
  Picture.init({
    img: DataTypes.TEXT,
    post_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};