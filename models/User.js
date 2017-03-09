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

// //Pre Save
// userSchema.pre('save',function(next){
// 	var currentDate = new Date();
// 	this.update_at = currentDate;

// 	if(!this.created_at){
// 		this.created_at = currentDate;
// 	}
// });

var User = mongoose.model('User', userSchema);

module.exports = User;