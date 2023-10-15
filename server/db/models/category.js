const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Transport }) {
      this.hasMany(Transport, { foreignKey: 'categoryId' });
    }
  }
  Category.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
