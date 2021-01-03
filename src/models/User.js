const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          },
          len: {
            args: [3, 30],
            msg: "O nome deve conter entre 3 e 30 caracteres"
          }
        }
      },
      last_name:        DataTypes.STRING,
      birth_date_day:   DataTypes.INTEGER,
      birth_date_month: DataTypes.INTEGER,
      birth_date_year:  DataTypes.INTEGER,
      gender:           DataTypes.ENUM('male', 'female', 'other'),
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.UserAccount, { foreignKey: 'account_id', as: 'user_account' });
  }
}

module.exports = User;