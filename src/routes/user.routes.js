const { authJwt } = require('../middlewares');
const UserController = require('../controllers/UserController');
const ChannelController = require('../controllers/ChannelController');
const YoutubeScrappingController = require('../controllers/YoutubeScrappingController');

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

  app.get(
    '/users/:user_id/channels',
    [authJwt.verifyToken],
    ChannelController.index
  );

  app.post(
    '/users/:user_id/channels',
    [authJwt.verifyToken],
    ChannelController.store
  );

  app.delete(
    '/users/:user_id/channels',
    [authJwt.verifyToken],
    ChannelController.delete
  );

  app.get(
    '/channels-search',
    [authJwt.verifyToken],
    YoutubeScrappingController.searchChannels
  );
};

