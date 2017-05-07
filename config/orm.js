// Dependencies
var connection = require("../connection.js");

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

















module.exports = orm;