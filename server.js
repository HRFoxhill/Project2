const express = require('express');
const app = express();
const expressValidator = require('express-validator');
const hbs = require('express-hbs');
const path = require('path');
const PORT = process.env.Port || 8080;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const db = require("./app/models");

app.use(express.static('app/public'));
app.engine('hbs', hbs.express4({ defaultLayout: "./app/views/layouts/login",
  partialsDir: __dirname + '/app/views/partials'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/app/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(session({secret: 'HFoxhill', saveUninitialized: true, resave: false}));

//Routes
//=====================================================
require("./app/routes/html-routes.js")(app);
require("./app/routes/task-api-routes.js")(app);
require("./app/routes/user-api-routes.js")(app);

//routes for stretch verification.
// const blockchain = require('./routes/blockchain.route');
// app.use('/blockchain',blockchain);

//user creation/verification and session Id route
const user = require('./app/routes/userCreate.route');
app.use('/user',user);

app.get('/', function(req, res){
    console.log("session email " + req.session.email)
    res.send('hello');
 });
db.sequelize.sync().then(function() {
app.listen(PORT, function(req, res){
   console.log('Server is running on PORT: ',PORT);
})
});