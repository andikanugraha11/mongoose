var mongoose	= require('mongoose');
var Schema 		= mongoose.Schema;

var userSchema = new Schema({
	name		: String,
	username	: {
		type	: String,
		require	: true,
		unique	: true
	},
	password	: {
		type	:String,
		require	: true
	},
	verified	: Boolean,
	contact		: {
		phone	: Number,
		email	: String,
		page	: String
	},
	created_at	: Date,
	update_at	: Date
});

var User = mongoose.model('User', userSchema);

module.exports = User;