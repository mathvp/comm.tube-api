const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "Erro ao listar todos os usuários..."});
    }
  },

  async store(req, res) {
    try {
      const {
        first_name,
        last_name,
        email,
        birth_date_day,
        birth_date_month,
        birth_date_year,
        gender
      } = req.body;

      const user = await User.create({
        first_name,
        last_name,
        email,
        birth_date_day,
        birth_date_month,
        birth_date_year,
        gender
      });

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message || error });
    }
  }
};
