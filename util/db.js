var mongoose = require('mongoose'),
	db = mongoose.connect("mongodb://warren:sepsis@ds041404.mongolab.com:41404/realtime-sep",function(err){
		if(err) 
			console.log(err);
	});


	module.exports = db;