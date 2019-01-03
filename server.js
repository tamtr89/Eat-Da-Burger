var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application 
app.use(express.static("public"));

// Parse request bosy as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});