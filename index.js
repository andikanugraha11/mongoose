var express			= require('express');
var path 			= require('path');
var mongoose		= require('mongoose');

var app				= express();

//require controller
var userController	= require("./controllers/user");

var database		= "mongodb://localhost:27017/cobaMongoose";
mongoose.Promise 	= global.Promise;
mongoose.connect(database);

app.use('/user', userController);

app.get('/', function(req,res){
	res.send('Hello World!');
	console.log('anda berada pada directory root');
});

app.listen(3000, function(){
	console.log('running at server 3000');
})