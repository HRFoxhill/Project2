var db = require("../models");

module.exports = function(app) {
app.get("/api/user", function(req, res) {
    // db.User.findAll({
    //   include: [db.Task]
    // }).then(function(dbUser) {
    //   res.json(dbUser);
    // });
    res.json([
      {id:1, project_name: 'carpentry', project_description: 'Lorem Ipsum', project_hours: 5, project_status: 'open' }
    ])
  });

  app.get("/api/user/:id", function(req, res) {
    // db.User.findOne({
    //   where: {
    //     id: req.params.id
    //   },
    //   include: [db.Task]
    // }).then(function(dbUser) {
    //   res.json(dbUser);
    // });
    res.json([
      {id:1, project_name: 'carpentry', project_description: 'Lorem Ipsum', project_hours: 5, project_status: 'open' }
    ])
  });

  app.post("/api/user", function(req, res) {
    // db.User.create(req.body).then(function(dbUser) {}
      res.json(req.body);
    });
  

  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

}
