// var mongoose		= require('mongoose');
// var database		= "mongodb://localhost:27017/cobaMongoose";

// mongoose.Promise 	= global.Promise;
// mongoose.connect(database);
var express			= require('express');
var router			= express.Router();

var User = require('../models/User');

var dika = new User({
	name		: 'qwertyuiop',
	username	: 'qwertyuiop',
	password	: 'password',
	verified	: true
});

router.get('/',function(req,res){
	res.send('Root GET');
	console.log('anda berada pada / userController');
});

router.get('/save', function(req, res){
	console.log('anda sedang mengakses save document');
	dika.save(function(err){
		if(err){
			console.log(err);
		}else{
			console.log('Data telah di tambah');
		}
	});
});




module.exports = router;