//REQUIRED MODULES
var express = require("express");
var router = express.Router();

//ADD PRODUCTS ROUTE
router.get("/new", function(req, res){
    res.render("products/new.ejs");
})

module.exports = router;