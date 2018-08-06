const express = require('express');
const router = express.Router();
const projectCreateModel = require("../models/")



router.get('/', function (req, res) {
  res.render('add', { errors: req.session.errors });
  req.session.errors = null;
});


router.post('/create', function (req, res) {
  let newProject = {
    project_name: req.body.name,
    project_hours: req.body.hours,
    project_description: req.body.description
  }

  projectCreateModel.Project.create(newProject)
    .then((data) => {
      res.send(data);
    })


});

module.exports = router;