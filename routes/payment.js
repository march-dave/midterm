// var express = require('express');
// var router = express.Router();
//
// var Item = require('../models/item');
//
// //   POST /api/payment
// router.post('/', (req, res) => {
//
//   var token = req.body.token;
//   // var bidId = req.body.bidId;
//   var itemId = '574395cb31b8e1d4045cb683';
//
//   console.log('bidId', Item);
//
//   Item.findById(itemId, (err, item) => {
//
//     // console.log('Router token', typeof token);
//     console.log('bid', item);
//
//     if(err || !item) {
//       return res.status(400).send(err || { error: 'Bid not found.' })
//     }
//
//     // console.log('bid', bid);
//     // console.log('token', token);
//
//     bid.purchase(token, (err, charge) => {
//       console.log('charge:', charge);
//       // if(err) return res.status(400).send(err);
//
//       // res.send(charge);
//     });
//   });
// });
//
// module.exports = router;
