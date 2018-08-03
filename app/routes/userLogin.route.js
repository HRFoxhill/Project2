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

//LOGOUT
app.delete('/logout', function (req, res) {
    req.session.currentUser = null;
    res.redirect('/');
});