var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var ENV = require('./environment');

var app = express();


var User = require('./models/user');
var Tool = require('./models/tool');
var addTools = require('./addTools');

var sess;

addTools.run();

var db = mongoose.connect('mongodb://localhost/mytoolboxdb');
app.use(express.static(path.join(__dirname, '../webapp')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({secret: ENV.COOKIE_SECRET}));

app.post('/api/authenticate/login', function(req, res) {
	sess = req.session;

	User.findOne({username: req.body.username}, function(err, doc) {
		if (doc) {
			bcrypt.compare(req.body.password, doc.password, function(err, match) {
				if (err) res.status(500).send();

				if (match) {
					sess.user = {
						firstName: doc.firstName,
						lastName: doc.lastName,
						username: doc.username,
						email: doc.email,
						githubLink: doc.githubLink,
						linkedInLink: doc.linkedInLink
					};
					res.status(200).send();
				} else {
					res.status(401).send();
				}
			});
		} else {
			res.status(401).send();
		}
	});
});

app.post('/api/authenticate/register', function(req, res) {
	var user = new User({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email
	});

	user.save(function(err) {
		if (err) {
			res.status(409).send();
		} else {
			res.status(204).send();
		}
	});
});

app.get('/api/authenticate/logout', function(req, res) {
	req.session.destroy(function(err) {
		if(err) {
			res.status(500).send();
		} else {
			delete sess.user;
			res.status(204).send();
		}
	});
});

app.get('/api/authenticate/currentuser', function(req, res) {
	if (!sess) {
		res.status(404).send();
	} else {
		res.send(sess.user);
	}
});

app.get('/api/tools', function(req, res) {
	Tool.find({}, function(err, tools) {
		res.send(tools);
	});
});

app.get('/api/tool', function(req, res) {
	Tool.findOne({indexName: req.query.tool}, function(err, doc) {
		console.log(doc);
		if (doc) {
			res.send(doc);
		} else {
			res.status(404).send();
		}
	});
});

app.listen(3000);
console.log('Server up and running on port 3000');