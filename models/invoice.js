//DATABASE SCHEMA SETUP
var mongoose = require("mongoose");

var invoiceSchema = new mongoose.Schema({
    invoiceNumber: String,
    invoiceDate: Date,
    shop: String,
    products: [{
        product: {
            id: {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Product'
            },
            price: Number,
            weight: Number
        }
    }],
    amount: Number
});

//INVOICE MODEL
module.exports = mongoose.model("Invoice", invoiceSchema);