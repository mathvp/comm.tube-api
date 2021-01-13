const { Model, DataTypes } = require('sequelize');

class Channel extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      image_src: DataTypes.STRING,
      subscribers: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'channels'
    });
  }

  static associate(models) {
    this.belongsToMany(models.User, { foreignKey: 'channel_id', through: 'user_channels', as: 'users' });
  }
}

module.exports = Channel;