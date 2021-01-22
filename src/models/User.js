const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "O campo Nome não pode ser vazio"
          },
          len: {
            args: [3, 30],
            msg: "O nome Nome deve conter entre 3 e 30 caracteres"
          }
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "O campo Sobrenome não pode ser vazio"
          }
        }
      },
      birth_date_day: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "O campo Dia de Nascimento não pode ser vazio"
          }
        }
      },
      birth_date_month: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "O campo Mês de Nascimento não pode ser vazio"
          }
        }
      },
      birth_date_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "O campo Ano de Nascimento não pode ser vazio"
          }
        }
      },
      gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "O campo Sexo não pode ser vazio"
          }
        }
      }
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.UserAccount, { foreignKey: 'account_id', as: 'user_account' });
    this.belongsToMany(models.Channel, { foreignKey: 'user_id', through: 'user_channels', as: 'channels' });
  }
}

module.exports = User;