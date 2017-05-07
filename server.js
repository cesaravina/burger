// Dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

// Express
var app = express();

// Get static content from the "public" directory
app.use(express.static(process.cwd() + "/public"))

// Body Parser
// app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(bodyParser.urlencoded({extended: false}));

// method override for ?_method=DELETE using POST
app.use(methodOverride("_method"));

// Handlebars
var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give access to them
var routes = require("./controllers/burgerController.js");

app.use("/", routes);

app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT + " d(-_-)b")
})
