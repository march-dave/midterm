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

    // var beer = new Beer(JSON.parse(body).data);
    //  Beer.save( (err, beer) => {
    //    console.log('beer:', beer);
    //    res.send(beer);
    //  });

    res.send(JSON.parse(body).data);

  });

  // Facedetect.find({}, (err, faces) => {
  //   if(err) {
  //     res.status(400).send(err);
  //   } else {
  //     res.send(faces);
  //   }
  //   console.log('faces: ', faces);
  // })


})

module.exports = router;
