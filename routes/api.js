var express = require('express');
var router = express.Router();

router.use('/beers', require('./beers'));
router.use('/users', require('./users'));

module.exports = router;
