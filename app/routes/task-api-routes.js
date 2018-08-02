// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the task
  app.get("/api/tasks", function(req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    // db.Projects.findAll({
    //   where: query,
    //   include: [db.Author]
    // }).then(function(dbTasks) {
    //   res.json(dbTasks);
    // });
    res.json([
      {id:1, project_name: 'carpentry', project_description: 'Lorem Ipsum', project_hours: 5, project_status: 'open' }
    ])
  });

  // Get route for retrieving a single Tasks
  app.get("/api/tasks/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    // db.Tasks.findOne({
    //   where: {
    //     id: req.params.id
    //   },
    //   include: [db.Author]
    // }).then(function(dbTasks) {
    //   res.json(dbTasks);
    // });
    res.json([
      {id:1, project_name: 'carpentry', project_description: 'Lorem Ipsum', project_hours: 5, project_status: 'open' }
    ])
  });


  // POST route for saving a new task
  app.post("/api/tasks", function(req, res) {
    db.Task.create(req.body).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  // DELETE route for deleting tasks
  app.delete("/api/tasks/:id", function(req, res) {
    db.Task.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  // PUT route for updating tasks
  app.put("/api/tasks", function(req, res) {
    db.Task.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbTask) {
      res.json(dbTask);
    });
  });
};