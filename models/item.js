'use strict';

var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  image: {type: String},
  title: {type: String},
  detail: {type: String},
  bidtime: {type: Date},
  startingbid: {type: Number},
  variety: { type: String },
  value: { type: Number }
});

itemSchema.methods.purchase = function(token, cb) {
  stripe.charges.create({
    amount: this.value * 100,
    currency: "usd",
    source: token.id, // obtained with Stripe.js
    description: `Charge for ${token.email}: ${this.variety}`
  }, cb);
};


var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
