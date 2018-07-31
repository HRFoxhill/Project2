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



  // signup page
  app.get("/", function(req, res) {    
    res.sendFile(path.join(__dirname, "../views/signup.handlebars"));
  });

  app.get("/home", function(req,res) {
    res.sendFile(path.join(__dirname, "../views/index.handlebars"));
  })
  
};