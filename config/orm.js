// Dependencies
var connection = require("./connection.js");

// SQL syntax helper
function printQuestionMarks(num){
	var arr=[];

	for (var i=0; i<num; i++){
		arr.push("?")
	}
	return arr.toString();
}

// SQL syntax helper
function objToSql(obj){
	var arr=[];

	for (var key in obj){
		if (Object.hasOwnProperty.call(obj, key)){
			arr.push(key + "=" + obj[key]);
		}
	}
	return arr.toString();
}

// ORM / SQL statments object
var orm = {
	all: function(tableInput, cb){
		var queryString = "SELECT * FROM" + tableInput + ";";
		connection.query(queryString, function(err, result){
			if(err) {
				throw err;
			}
			cb(result);
		});
	},
	create: function(table, cols, vals, cb){
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result){
			if (err){
				throw err;
			}
			cb(result);
		});
	},
	update: function(table, objColVals, condition, cb){
		var queryString = "UPDATE " + table;
		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += "WHERE";
		queryString += condition

		console.log(queryString);
		connection.query(queryString, function(err, result){
			if(err){
				throw err;
			}
			cb(result);
		});
	}
};

// Export orm object to burger.js
module.exports = orm;