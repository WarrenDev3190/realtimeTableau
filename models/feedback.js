var db = require('../util/db'),
	Schema = db.Schema;

var FeedbackSchema = new Schema({
	clinicianName: String,
	message: String
},{strict:false});



module.exports = db.model('Feedback',FeedbackSchema);