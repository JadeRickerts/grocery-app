//REQUIRED MODULES
var express = require("express");
var router = express.Router();
var Invoice = require("../models/invoice.js");
var Product = require("../models/product.js");

//INDEX ROUTE
router.get("/", function(req, res){
    Invoice.find({}, function(err, allInvoices){
        if(err){
            console.log(err);
        } else {
            res.render("invoices/index.ejs", {invoices: allInvoices});
        }
    });
});

//NEW ROUTE
router.get("/new", function(req, res){
    res.render("invoices/new.ejs");
});

//CREATE ROUTE
router.post("/", function(req, res){
    var invoice = {
        invoiceNumber: req.body.invoiceNumber,
        invoiceDate: req.body.invoiceDate,
        shop: req.body.shop,
        amount: req.body.amount
    }
    Invoice.create(invoice, function(err, newInvoice){
        if (err) {
            console.log(err);
        } else {
            res.redirect("/invoices/");
        }
    });
});

//ADD PRODUCTS TO INVOICE ROUTE
router.get("/:invoiceId/addProducts", function(req, res){
    Invoice.findById(req.params.invoiceId, function(err, foundInvoice){
        if (err) {
            console.log(err);
        } else {
            Product.find({}, function(err, allProducts){
                if (err) {
                    console.log(err);
                } else {
                    res.render("invoices/products.ejs", {
                        invoice: foundInvoice,
                        products: allProducts
                    });
                }
            });
        }
    });
});

module.exports = router;