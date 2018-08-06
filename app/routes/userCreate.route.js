const express = require('express');
const router =  express.Router();
const userCreateModel = require("../models")
require("dotenv").config();
var nodemailer = require('nodemailer');

var client = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: process.env.SENDGRID_UN,
        pass: process.env.SENDGRID_PW
    }
});

var memberEmail=  {
    from: 'pegmickelson@gmail.com',
    to: '',
    subject: 'Welcome to Karma!',
    text: 'We are glad to have you here.',
    html: '<b>Welcome to Karma!</b>'
  }

console.log(memberEmail);


router.post('/add', function(req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
  
    // console.log(req.body);

    req.checkBody(name, 'Name is required').notEmpty();
    req.checkBody(email, 'Email is required').notEmpty();
    req.checkBody(email, 'Please enter a valid email').isEmail();
    req.checkBody(password, 'Please enter a password').notEmpty();
  
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
            memberEmail.to = email
            client.sendMail(memberEmail, function(err, info){
                if (err ){
                  console.log(err);
                }
                else {
                  console.log('Message sent: ' + info.response);
                }
              });
       req.session.email=email;
       res.redirect('/home');
       })
    }
    
 });

module.exports =  router;