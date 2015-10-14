//Express Modules
var express = require("express");
var path  = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");

//Application
var index = require("./routes/index");


var app = express();

//MiddleWare
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
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


app.listen(app.get("port"),function(){
	console.log("App running on port: ", + app.get("port"));
});


