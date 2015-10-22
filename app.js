//Express Modules
var express = require("express");
var path  = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");
var fs = require('fs');

//Application
var index = require("./routes/index");
var patient = require("./routes/patient");

var app = express();

//MiddleWare
app.use(bodyParser.urlencoded({extended:false,parameterLimit: 10000, limit: 5024 * 5024 * 10}));
app.use(bodyParser.json({extended:false,parameterLimit: 10000, limit: 5024 * 5024 * 10}));
app.use(cookieParser());
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"./app/public")));
app.use(require('connect-livereload')());

//Settings
app.set("port", process.env.PORT || 8080);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


//Route Definitions
app.get("/",index);

app.use("/patient",function(req,res){
	fs.appendFile('./patientData.txt', JSON.stringify(req.body), function(err){
		if(err){
			res.send({status:500});
		}else{
			res.send({status:200});
		}
	})
});

app.use("/annotation",function(req,res){
	fs.appendFile('./annotation.txt', JSON.stringify(req.body), function(err){
		if(err){
			res.send({status:500});
		}else{
			res.send({status:200});
		}
	})
});


app.listen(app.get("port"),function(){
	console.log("App running on port: ", + app.get("port"));
});


