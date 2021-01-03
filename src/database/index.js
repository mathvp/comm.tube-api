const Sequelize = require('sequelize');
const dbConfig  = require('../config/database.config');

const User = require('../models/User');
const UserAccount = require('../models/UserAccount');

const connection = new Sequelize(dbConfig);

User.init(connection);
UserAccount.init(connection);

UserAccount.associate(connection.models);
User.associate(connection.models);

module.exports = connection;