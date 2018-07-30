var db = require("../models");

module.exports = function(app) {
app.get("/api/user", function(req, res) {
    //Get users from db

  });

  app.get("/api/user/:id", function(req, res) {
    // Get specific user by id

  });

  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

}
