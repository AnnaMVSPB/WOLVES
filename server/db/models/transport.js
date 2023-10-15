const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transport extends Model {
    static associate({
      User, Category, Like, Comment, Photo,
    }) {
      this.belongsTo(User, { foreignKey: 'ownerId' });
      this.belongsTo(Category, { foreignKey: 'categoryId' });
      this.hasMany(Like, { foreignKey: 'transportId' });
      this.hasMany(Comment, { foreignKey: 'transportId' });
      this.hasMany(Photo, { foreignKey: 'transportId' });
    }
  }
  Transport.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Transport',
  });
  return Transport;
};
