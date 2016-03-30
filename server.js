var express = require('express');
var mongoose = require('mongoose');

var app = express();
mongoose.connect('mongodb://localhost/mytoolboxdb')

mongoose.model('users', {
	firstname: String,
	lastname: String,
	username: String,
	email: String,
	password: String,
	githubLink: String,
	linkedInLink: String,
	avatar: String
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('Server up and running on port 3000');