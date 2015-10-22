var db = require('../util/db');
	
var TestSchema = db.Schema({
	title: String
});

module.exports = db.model('Test',TestSchema);