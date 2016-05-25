var express = require('express');
var router = express.Router();

var Item = require('../models/item');

// router.route('/')
//     .get((req, res) => {
//       Item.find({}, (err, items) => {
//           res.status(err ? 400 : 200).send(items);
//         });
//     })
//     .post((req, res) => {
//       var item = new Item(req.body);
//       item.save((err, savedItem) => {
//         res.status(err ? 400 : 200).send(err || savedItem);
//       });
//   })

// router.get('/:id', (req, res) => {
//   Bird.findById(req.params.id, (err, bird) => {
//     res.status(err ? 400 : 200).send(err || bird);
//   });
// });

var request = require("request");

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


module.exports = router;
