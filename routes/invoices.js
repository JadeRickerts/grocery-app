//REQUIRED MODULES
var express = require("express");
var router = express.Router();

//ADD ROUTE
router.get("/new", function(req, res){
    res.render("invoices/new.ejs");
});

module.exports = router;