const express = require('express');
const router =  express.Router();
const projectCreateModel = require("../models")



router.get('/', function(req, res){
   res.render('add', { errors: req.session.errors });
   req.session.errors = null;
});


router.post('/add', function(req, res) {
    let name = req.body.name;
    let hours = req.body.hours;
    let description = req.body.description;
    let status = req.body.status;
    console.log(req.body);

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('hours', 'Hours are required').notEmpty();
    req.checkBody('hours', 'Please enter a valid # of hours').isEmail();
    req.checkBody('description', 'Please enter a description').notEmpty();
  
    const errors = req.validationErrors();
    if(errors){
       req.session.errors = errors;
       res.redirect('/home');
    }
    else{
       req.session.success = true;
       console.log("project else route hit")
      projectCreateModel.User.create({
          project_name: req.body.name, 
          project_hours: hours, 
          project_description: description,
          project_status: status
        }).then(function(dbResponse) {
            req.session.project_id = dbResponse.id;
            console.log("dbresponse" + dbResponse);
       
       req.session.name=name;
       res.redirect('/home');
       })
    }
    
 });

module.exports =  router;