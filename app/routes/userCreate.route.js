const express = require('express');
const router =  express.Router();
const userCreateModel = require("../models")



router.get('/', function(req, res){
   res.render('add', { errors: req.session.errors });
   req.session.errors = null;
});


router.post('/add', function(req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
  
    // console.log(req.body);

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Please enter a valid email').isEmail();
    req.checkBody('password', 'Please enter a password').notEmpty();
  
    const errors = req.validationErrors();
    if(errors){
       req.session.errors = errors;
       res.redirect('/user');
    }
    else{
       req.session.success = true;
       console.log("hit the else route")
      userCreateModel.User.create({
          user_name: req.body.name, 
          user_email: email, 
          user_password: password 
        }).then(function(dbResponse) {
            req.session.user_id = dbResponse.id;
            console.log("dbresponse" + dbResponse);
       
       req.session.email=email;
       res.redirect('/home');
       })
    }
    
 });

module.exports =  router;