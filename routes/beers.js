var express = require('express');
var router = express.Router();
var request = require("request");

var Beer = require('../models/beer');

router.route('/')
.get((req, res) => {

  var request = require("request");

  var options = {
    method: 'GET',
    url:  'https://api.brewerydb.com/v2/beer/random',
    qs: { key: '223748ee6145b2143642c33f2ed2b503', format: 'json' },
    headers: {
      'cache-control': 'no-cache'
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    var obj = JSON.parse(body).data;

    var beer = new Beer(obj);
     beer.save( (err, beer) => {
       res.send(beer);
     });
  });

  // var request = require("request");
  //
  // var options = { method: 'GET',
  //   url: 'https://api.brewerydb.com/v2/beer/x7ICZ5',
  //   qs: { key: '223748ee6145b2143642c33f2ed2b503', format: 'json' },
  //   headers:
  //    { 'postman-token': '360b6fc6-39f2-30bc-68b9-a2e6ffa396da',
  //      'cache-control': 'no-cache' } };
  //
  // request(options, function (error, response, body) {
  //   if (error) throw new Error(error);
  //
  //   console.log(body);
  // });

})

router.put('/:id', (req, res) => {
  Beer.findByIdAndUpdate( { id: req.params.id }, {$set: req.body}, {new: true}, (err, beer) => {
    res.status(err ? 400 : 200).send(err || beer);
  });
});

module.exports = router;
