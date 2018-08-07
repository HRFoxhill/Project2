// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.



  // signup/login page
  app.get("/", function (req, res) {
    res.render(path.join(__dirname, "../views/add.hbs"));
  });

  app.get("/home", function (req, res) {
    db.Project.findAll({}).then(function (data) {
      let hbsObject = {
        projects: data
      }
      res.render("index", { title: 'home layout', layout: "layouts/main" });
    })
  })
};