const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate({ Transport }) {
      this.belongsTo(Transport, { foreignKey: 'transportId' });
    }
  }
  Photo.init({
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
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
    modelName: 'Photo',
  });
  return Photo;
};
