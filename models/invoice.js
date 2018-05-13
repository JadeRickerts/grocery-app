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
    amount: Number,
    imageURL: {
        type: String,
        default: "https://www.bigbanner.com.au/resource/gallery/250_250/gallery_3_1434155975.jpeg"
    }
});

//INVOICE MODEL
module.exports = mongoose.model("Invoice", invoiceSchema);