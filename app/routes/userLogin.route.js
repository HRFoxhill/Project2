var path = require("path");
const express = require('express');
const router =  express.Router();


//LOGIN POST
router.post('/login', function (req, res) {
    User.find(req.body.email, function (user) {
        bcrypt.compare(req.body.password, user.password, function (err, result) {
            if (result) {
                req.session.currentUser = user.id;
                res.redirect('/home');
            } else {
                res.redirect('/add');
            }
        });
    });
});


    // if user found.
    if (user.length!=0) {
      if(user[0].email){
        console.log('User  exists!');                         
         }else{
            console.log('User does not exist, try again or please sign up: ');      
         }                                    
         var err = new Error();
        err.status = 310;
        return done(err);
    }


//LOGOUT
router.post('/logout', function (req, res) {
    req.session.currentUser = null;
    res.sendStatus(200);
});

module.exports = router;