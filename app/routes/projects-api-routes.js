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
  app.get("/api/projects", function(req,res){
    console.log(db.Project);
    db.Project.findAll({}).then(function(result) {
      return res.json(result);
    });
    
  });
};