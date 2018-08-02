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
<<<<<<< HEAD
    res.render(path.join(__dirname, "../views/add.hbs"));
=======
    res.sendFile(path.join(__dirname, "../../temporary_files/login.html"));
>>>>>>> models
  });

  app.get("/home", function(req,res) {
    res.render(path.join(__dirname, "../../temporary_files/signup.html"));
  })
  
};
