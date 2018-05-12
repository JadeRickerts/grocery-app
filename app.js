//REQUIRED MODULES
var express     = require("express"),
app             = express(),
bodyParser      = require("body-parser"),
mongoose        = require("mongoose"),
Product         = require("./models/product.js"),
path 		        = require('path');

//DATABASE CONFIG
mongoose.connect('mongodb://localhost/grocery');

//SETTINGS
app.use(bodyParser.urlencoded({extended: true}));
// app.set("view eninge", "ejs");

//Serve public folder - path setup
app.use(express.static(path.join(__dirname, 'public')));

//REQUIRED ROUTES
var indexRoutes = require("./routes/products");

//ROUTES
app.use(indexRoutes);

//SERVER CONFIG
app.listen(3000, function(){
  console.log("Server started on PORT 3000")
});