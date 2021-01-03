const UserAccount = require('../models/UserAccount');
const sequelize = require('../database');


module.exports = {
  async store(req, res) {

    const t = await sequelize.transaction();

    try {

      const {
        first_name,
        last_name,
        email,
        password,
        birth_date_day,
        birth_date_month,
        birth_date_year,
        gender
      } = req.body;

      const userAccount = await UserAccount.create({
        email,
        password,
      }, { transaction: t });

      const user = await userAccount.createUser({
        first_name,
        last_name,
        birth_date_day,
        birth_date_month,
        birth_date_year,
        gender,
      }, { transaction: t });

      await t.commit();

      return res.status(200).json({ account: userAccount, 'user_data': user });

    } catch (error) {
      await t.rollback();

      return res.status(400).json({ error: error.message || error });
    }
  }
};
