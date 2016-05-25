var express = require('express');
var router = express.Router();
var request = require("request");

var Beer = require('../models/beer');

var options = { method: 'GET',
  url: 'https://api.brewerydb.com/v2/beer/random',
  qs: { key: '223748ee6145b2143642c33f2ed2b503', format: 'json' },
  headers:
   {
     'cache-control': 'no-cache' }
   };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

// request(options, function (err, response, body) {
//     if(err) {
//       throw new Error(err);
//     } else {
//       // console.log('req.body', req.body);
//       var beer = new Beer();
//       beer.save( (err, beer) => {
//         console.log('var beer:', beer);
//         res.send(beer);
//       });
//     }
//   });


module.exports = router;
