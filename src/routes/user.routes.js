const { authJwt } = require('../middlewares');
const UserController = require('../controllers/UserController');
const ChannelController = require('../controllers/ChannelController');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/users",
    [authJwt.verifyToken],
    UserController.index
  );

  app.get('/users/:user_id/channels', ChannelController.index);
  app.post('/users/:user_id/channels', ChannelController.store);
  app.delete('/users/:user_id/channels', ChannelController.delete);
};

