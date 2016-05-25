var express = require('express');
var router = express.Router();
var User = require('../models/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  req.uesr = req.body;
  req.user.save((err, savedUser) => {
    res.status(err ? 400:200).send(err || savdUser);
  });
});

module.exports = router;
