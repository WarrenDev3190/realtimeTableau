var express = require('express');
var router  = express.Router();

	router.post('/feedpack/patient',function(req,res){
		console.log(req.body);
	});

module.exports = router;