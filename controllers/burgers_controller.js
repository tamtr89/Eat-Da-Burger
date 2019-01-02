var express = require("express");
var router = express.Router();

// Import the model burger.js to use its database functions.
var cat = require("../models/burger.js");

// Create all our routes and set up logic within those routes
router.get("/", function(req, res){
    burger.all(function(data){
        // hbsObject is handlebars object
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    });
});

