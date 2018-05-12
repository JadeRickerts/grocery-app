//REQUIRED MODULES
var express = require("express");
var router = express.Router();
var Product = require("../models/product.js");

//INDEX ROUTE
router.get("/", function(req, res){
    Product.find({}, function(err, allProducts){
        if (err) {
            console.log(err);
        } else {
            res.render("products/index.ejs", {products: allProducts})
        }
    })
})

//ADD ROUTE
router.get("/new", function(req, res){
    res.render("products/new.ejs");
});

//CREATE ROUTE
router.post("/", function(req, res){
    //Create a new object with the variables taken from the form.
    var newProduct = {
        description: req.body.name, 
        brand: req.body.brand,
        packSize: req.body.size + req.body.uom,
        uom: req.body.uom,
        category: req.body.category,
        barcode: req.body.barcode,
        weighted: req.body.weighted
    };
    //Create new bet and save to DB
    Product.create(newProduct, function(err, newlyCreated){
     if(err){
       console.log(err);
     }
     else {
       //redirect back to bets page
       res.redirect("/new");
     }
    });
 });

module.exports = router;