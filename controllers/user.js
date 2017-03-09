var mongoose		= require('mongoose');
var database		= "mongodb://localhost:27017/cobaMongoose";

mongoose.Promise 	= global.Promise;
mongoose.connect(database);

var User = require('../models/User');

var dika = new User({
	name		: 'dikadika',
	username	: 'dikadika',
	password	: 'password',
	verified	: true
});


dika.save(function(err){
	if(err){
		console.log(err);
	}else{
		console.log('Data telah di tambah');
	}
});
