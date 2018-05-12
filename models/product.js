//DATABASE SCHEMA SETUP
var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  description: String,
  brand: String,
  packSize: String,
  uom: String,
  category: String,
  barcode: String,
  weighted: {
      type: Boolean,
      default: false
  },
  dateAdded: {
      type: Date,
      default: Date.now
  }
});

//BET MODEL
module.exports = mongoose.model("Product", productSchema);