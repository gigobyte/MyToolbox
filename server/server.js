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
var DEFAULT_LISTS = ['Learned', 'Want to learn'];

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
				if (err) {
					return res.status(500).send();
				} else if (match) {
					sess.user = doc;
					res.status(200).send();
				} else {
					return res.status(401).send();
				}
			});
		} else {
			return res.status(401).send();
		}
	});
});

app.post('/api/authenticate/register', function(req, res) {
	var user = new User({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
		lists: [
			{name: 'Learned', entries: []},
			{name: 'Want to learn', entries: []}
		]
	});

	user.save(function(err) {
		if (err) {
			return res.status(409).send();
		} else {
			res.status(200).send();
		}
	});
});

app.get('/api/authenticate/logout', function(req, res) {
	req.session.destroy(function(err) {
		if(err) {
			return res.status(500).send();
		} else {
			delete sess.user;
			res.status(204).send();
		}
	});
});

app.get('/api/authenticate/currentuser', function(req, res) {
	if (!sess) {
		return res.status(404).send();
	} else {
		res.send(sess.user);
	}
});

app.get('/api/tools', function(req, res) {
	Tool.find({}, function(err, tools) {
		if(err) {
			return res.status(500).send();
		} else {
			res.send(tools);
		}
	});
});

app.get('/api/tool', function(req, res) {
	Tool.findOne({indexName: req.query.tool}, function(err, doc) {
		if (doc) {
			res.send(doc);
		} else {
			return res.status(404).send();
		}
	});
});

app.post('/api/tool/add', function(req, res) {
	User.findOne({username: sess.user.username}, function(err, found) {
		found.lists.forEach(function(list) {
			if(list.name === req.body.list.name) {
				list.entries.push({
					tool: mongoose.Types.ObjectId(req.body.tool),
					rating: req.body.rating,
					review: req.body.review
				});
			}
		});

		found.markModified('lists');

		found.save(function(err) {
			if (err) {
				console.log(err);
				return res.status(409).send();
			} else {
				console.log('Tool inserted fine!');
				res.status(200).send();
			}
		});
	});
});

app.listen(3000);
console.log('Server up and running on port 3000');