var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var db = mongoose.connect('mongodb://localhost/mytoolboxdb')

var User = require('./models/user');

app.use(express.static(__dirname + '../webapp'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/authenticate', function(req, res) {
	res.send('Test');
});

app.post('/api/authenticate/register', function(req, res) {
	console.log(req.body);
});

app.listen(3000);
console.log('Server up and running on port 3000');