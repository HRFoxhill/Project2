
const express = require('express');
const app =  express.Router();


//LOGIN FORM
app.get('/', function (req, res) {
    res.render('add', {errors: req.session.errors});
    req.session.errors = null;
});

//LOGIN POST
app.post('/add', function (req, res) {
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


    //if user found.
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
app.delete('/logout', function (req, res) {
    req.session.currentUser = null;
    res.redirect('/');

});