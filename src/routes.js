const express = require('express');
const UserAccountController = require('./controllers/UserAccountController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/register', UserAccountController.store);
routes.post('/login', UserAccountController.login);

module.exports = routes;