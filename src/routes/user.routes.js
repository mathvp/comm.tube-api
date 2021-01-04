const { authJwt } = require('../middlewares');
const UserController = require('../controllers/UserController');

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
};

