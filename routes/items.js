var express = require('express');
var router = express.Router();

var Item = require('../models/item');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.route('/')
    .get((req, res) => {
      Item.find({}, (err, items) => {
          res.status(err ? 400 : 200).send(items);
        });
    })
    .post((req, res) => {
      var item = new Item(req.body);
      item.save((err, savedItem) => {
        res.status(err ? 400 : 200).send(err || savedItem);
      });
  })

module.exports = router;
