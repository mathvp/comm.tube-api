const { Model, DataTypes } = require('sequelize');

class UserAccount extends Model {
  static init(sequelize) {
    super.init({
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Informe um email válido"
          },
          len: {
            args: [4, 60],
            msg: "O email deve conter entre 4 e 60 caracteres"
          }
        }
      },
      password: DataTypes.STRING,
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.hasOne(models.User, { foreignKey: 'account_id', as: 'user' });
  }
}

module.exports = UserAccount;