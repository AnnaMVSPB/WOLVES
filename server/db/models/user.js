const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Transport, Like, Comment }) {
      this.hasMany(Transport, { foreignKey: 'ownerId' });
      this.hasMany(Like, { foreignKey: 'userId' });
      this.hasMany(Comment, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.TEXT,
      defaultValue: '/img/avatar.png',
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
