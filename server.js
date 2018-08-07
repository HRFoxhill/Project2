const express = require('express');
const app = express();
const expressValidator = require('express-validator');
const hbs = require('express-hbs');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { sequelize } = require("./app/models");

//open up public directory for html routes
app.use(express.static('app/public'));

// initialize handlebars
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials',defaultLayout: "./app/views/layouts/login"
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + "/app/views");

// express extensions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(session({ secret: 'HFoxhill', saveUninitialized: true, resave: false }));


//Routes
//=====================================================
require("./app/routes/html-routes.js")(app);
require("./app/routes/projects-api-routes.js")(app);
require("./app/routes/user-api-routes.js")(app);


//user creation/verification and session Id route
const register = require('./app/routes/userCreate.route');
app.use('/register', register);

//already registered user route
const login = require('./app/routes/userLogin.route');
app.use('/user', login);

//create project route
const projects = require('./app/routes/projectCreate.route');
app.use('/project', projects);

// 
sequelize.sync()
  .then(() => {
    app.listen(PORT);
    console.log(`Server is running on port: ${PORT}`);
  });

