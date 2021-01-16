const Channel = require('../models/Channel');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      const { user_id } = req.params;

      const user = await User.findByPk(user_id, {
        include: { association: 'channels', through: { attributes: [] } }
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.status(200).json(user.channels);

    } catch (error) {
      return res.status(400).json({ error: error.message || error });
    }
  },

  async store(req, res) {
    try {
      const user_id = req.userId;
      const { channelList } = req.body;
      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const channels = await Channel.bulkCreate(channelList, { returning: true, validate: true }).then((result) => {
        return result;
      });

      await user.addChannel(channels).then().catch((error) => {
        console.log(error)
      });

      return res.status(200).json(channels);

    } catch (error) {
      return res.status(400).json({ error: error.message || error });
    }
  },

  async delete(req, res) {
    try {
      const { user_id } = req.params;
      const { name } = req.body

      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const channel = await Channel.findOne({
        where: { name }
      });

      await user.removeChannel(channel);

      return res.status(200).json();

    } catch (error) {
      return res.status(400).json({ error: error.message || error });
    }
  }
};
