'use strict';

var mongoose = require('mongoose');

var beerSchema = new mongoose.Schema({
  id:{type: String},
  name:{type: String},
  nameDisplay:{type: String},
  description:{type: String},
  abv:{type: String},
  ibu:{type: String},
  glasswareId:{type: String},
  availableId:{type: String},
  styleId:{type: String},
  isOrganic:{type: String},
  statusDisplay:{type: String},
  marked: {type: Boolean, default: false}
});

var Beer = mongoose.model('Beer', beerSchema);
module.exports = Beer;
