var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var db = mongoose.connect('mongodb://localhost/mytoolboxdb')

var User = require('./models/user');

app.use(express.static(path.join(__dirname, '../webapp')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/authenticate/login', function(req, res) {
	console.log(req.body);
});

app.post('/api/authenticate/register', function(req, res) {
	var user = new User({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email
	});

	user.save(function(err) {
		if (err) res.status(500).send();
	});
});

app.listen(3000);
console.log('Server up and running on port 3000');