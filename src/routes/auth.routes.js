const UserAccountController = require('../controllers/UserAccountController');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/register",
    [],
    UserAccountController.store
  );

  app.post("/login", UserAccountController.login);

  app.post("/logout", UserAccountController.logout);
};
