// Dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

// Route logic
router.get("/", function(req, res){
	burger.all(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject)
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res){
	burger.create([
		"name", "eaten"
		], [
		req.body.name, req.body.eaten
		], function(){
			res.redirect("/")
		});
});

router.put("/:id", function(req, res){
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.update({
		eaten: req.body.eaten
	}, condition, function(){
		res.redirect("/");
	});
});

// exporting the routes
module.exports = router;
