const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User, Transport }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Transport, { foreignKey: 'transportId' });
    }
  }
  Like.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    transportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Transports',
        key: 'id',
      },
      onDelete: 'cascade',
    },
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
