var mongoose		= require('mongoose');
mongoose.Promise 	= global.Promise;
var database		= "mongodb://localhost:27017/cobaMongoose";
mongoose.connect(database);