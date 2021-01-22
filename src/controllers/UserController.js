const User = require('../models/User');

const formidable = require('formidable')
const path = require('path')
const fs = require('fs')

module.exports = {
  async index(req, res) {
    try {
      const user_id = req.userId;
      const user = await User.findByPk(user_id);

      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "Erro ao listar o usuário..."});
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
        birth_date_day,
        birth_date_month,
        birth_date_year,
        gender
      });

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message || error });
    }
  },

   addProfilePicture(req, res) {
    const folder = path.join(__dirname, 'static')

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder)
    }

    const form = new formidable.IncomingForm()

    form.uploadDir = folder
    form.parse(req, (_, fields, files) => {
      console.log(files)
    })
    res.send(200)
  }

};
