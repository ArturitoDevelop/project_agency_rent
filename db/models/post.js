

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ Category, Favorite, Picture }) {
      this.belongsTo(Category, { foreignKey: 'cat_id' })
      this.hasMany(Favorite, { foreignKey: 'post_id' })
      this.hasMany(Picture, { foreignKey: 'post_id' })

    }
  }
  Post.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    cat_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};