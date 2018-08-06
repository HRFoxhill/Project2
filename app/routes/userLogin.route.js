
const express = require('express');
const router =  express.Router();


//LOGIN FORM
router.get('/', function (req, res) {
    res.render('add', {errors: req.session.errors});
    req.session.errors = null;
});

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
router.delete('/logout', function (req, res) {
    req.session.currentUser = null;
    res.redirect('/');

});

module.exports = router;