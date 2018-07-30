// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index page (guessing this is where all the posts will show up, like facebook?)
  app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
  });

  // login page
  app.get("/login", function(req, res) {
    // res.sendFile(path.join(__dirname, "../views/login.handlebars"));
  });

  // signup page
  app.get("/signup", function(req, res) {
    
    // res.sendFile(path.join(__dirname, "../views/signup.handlebars"));
  });

  
  
};
