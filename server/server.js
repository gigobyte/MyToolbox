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

var RESPONSES = {
	INTERNAL_SERVER_ERR: 'Internal server error',
	INVALID_LOGIN: 'Invalid username or password',
	USER_EXISTS: 'User already exists',
	REGISTER_SUCCESS: 'Registration succesful!',
	CANT_ADD_LIST: 'Couldn\'t add to list, please try again',
	FIELDS_REQUIRED: 'All fields are required',
	INVALID_EMAIL: 'Email is invalid',
	SHORT_USERNAME: 'Username should be at least 5 characters long',
	SHORT_PASSWORD: 'Password should be at least 6 characters long'
}

app.post('/api/authenticate/login', function(req, res) {
	sess = req.session; 

	User.findOne({username: req.body.username}, function(err, doc) {
		if (doc) {
			bcrypt.compare(req.body.password, doc.password, function(err, match) {
				if (err) {
					return res.status(500).send(RESPONSES.INTERNAL_SERVER_ERR);
				} else if (match) {
					sess.user = doc._id;
					res.status(204).send();
				} else {
					return res.status(401).send(RESPONSES.INVALID_LOGIN);
				}
			});
		} else {
			return res.status(401).send(RESPONSES.INVALID_LOGIN);
		}
	});
});

app.post('/api/authenticate/register', function(req, res) {
	if(!req.body) {
		res.status(400).send(RESPONSES.FIELDS_REQUIRED)
	} else if (req.body.email.indexOf('@') == -1) {
		res.status(400).send(RESPONSES.INVALID_EMAIL)
	} else if (req.body.username.length < 5) {
		req.status(400).send(RESPONSES.SHORT_USERNAME)
	} else if (req.body.password.length < 6) {
		req.status(400).send(RESPONSES.SHORT_PASSWORD)
	}

	var user = new User({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
		lists: [
			{name: 'Learned', entries: []},
			{name: 'Learning', entries: []},
			{name: 'Want to learn', entries: []}
		]
	});

	user.save(function(err) {
		if (err) {
			return res.status(409).send(RESPONSES.USER_EXISTS);
		} else {
			res.status(200).send(RESPONSES.REGISTER_SUCCESS);
		}
	});
});

app.get('/api/authenticate/logout', function(req, res) {
	req.session.destroy(function(err) {
		if(err) {
			return res.status(500).send(RESPONSES.INTERNAL_SERVER_ERR);
		} else {
			delete sess.user;
			res.status(204).send();
		}
	});
});

app.get('/api/authenticate/currentuser', function(req, res) {
	if (!sess) {
		return res.status(204).send();
	} else {
		User.findOne({_id: sess.user}, function(err, found) {
			if(err) {
				return res.status(500).send(RESPONSES.INTERNAL_SERVER_ERR);
			} else {
				res.send(found);
			}
		});
	}
});

app.get('/api/tools', function(req, res) {
	Tool.find({}, function(err, tools) {
		if(err) {
			return res.status(500).send(RESPONSES.INTERNAL_SERVER_ERR);
		} else {
			res.send(tools);
		}
	});
});

app.get('/api/tool', function(req, res) {
	Tool.findOne({_id: req.query.tool}, function(err, doc) {
		if (doc) {
			res.send(doc);
		} else {
			return res.status(404).send(RESPONSES.INTERNAL_SERVER_ERR);
		}
	});
});

app.post('/api/tool/add', function(req, res) {
	User.findOne({_id: sess.user}, function(err, found) {
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
				return res.status(409).send(RESPONSES.CANT_ADD_LIST);
			} else {
				res.status(204).send();
			}
		});
	});
});

app.listen(3000);
console.log('Server up and running on port 3000');