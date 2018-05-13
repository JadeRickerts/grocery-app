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
  },
  imageURL: {
      type: String,
      default: "http://fhprovisions.com/wp-content/uploads/2016/11/cutlery-smaller.png"
  }
});

//PRODUCT MODEL
module.exports = mongoose.model("Product", productSchema);