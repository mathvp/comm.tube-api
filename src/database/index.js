const Sequelize = require('sequelize');
const dbConfig  = require('../config/database.config');

const User = require('../models/User');
const UserAccount = require('../models/UserAccount');
const Channel = require('../models/Channel');

const connection = new Sequelize(dbConfig);

User.init(connection);
UserAccount.init(connection);
Channel.init(connection);

UserAccount.associate(connection.models);
User.associate(connection.models);
Channel.associate(connection.models);

module.exports = connection;