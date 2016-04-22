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
app.use(session({secret: ENV.COOKIE_SECRET, resave: false, saveUninitialized: true}));

var RESPONSES = {
	INTERNAL_SERVER_ERR: 'Internal server error',
	INVALID_LOGIN: 'Invalid username or password',
	USER_EXISTS: 'User already exists',
	REGISTER_SUCCESS: 'Registration succesful!',
	CANT_ADD_LIST: 'Couldn\'t add to list, please try again',
	CANT_UPDATE_LIST: 'Couldn\'t update entry, please try again',
	ADDED_SUCCESS: 'Tool added succesfully!',
	UPDATED_SUCCESS: 'Tool updated succesfully!',
	ACCESS_DENIED: 'Access denied',
	UPDATE_USER_SUCCESS: 'Changes saved succesfully!'
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
	var user = new User({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
		lists: [
			{id: 0, name: 'Learned', entries: []},
			{id: 1, name: 'Learning', entries: []},
			{id: 2, name: 'Want to learn', entries: []}
		]
	});

	user.save(function(err) {
		if (err) {
			if (err.name === 'ValidationError') {
				var firstKey = Object.keys(err.errors)[0];
				return res.status(409).send(err.errors[firstKey].message);
			} else if (err.name === 'MongoError') {
				return res.status(409).send(RESPONSES.USER_EXISTS);
			}
		} else {
			res.status(200).send(RESPONSES.REGISTER_SUCCESS);
		}
	});
});

app.get('/api/authenticate/logout', function(req, res) {
	req.session.destroy(function(err) {
		if (err) {
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
		if (err) {
			return res.status(500).send(RESPONSES.INTERNAL_SERVER_ERR);
		} else {
			res.send(tools);
		}
	});
});

app.get('/api/tool', function(req, res) {
	var id;

	if(mongoose.Types.ObjectId.isValid(req.query.tool)) {
		id = new mongoose.Types.ObjectId(req.query.tool);
	}

	Tool.findOne({$or: [{indexName: req.query.tool}, {_id: id}]}, function(err, doc) {
		if (doc) {
			res.send(doc);
		} else {
			return res.status(404).send(RESPONSES.INTERNAL_SERVER_ERR);
		}
	});
});

app.post('/api/tool/add', function(req, res) {
	User.findOne({_id: sess.user}, function(err, found) {
		if (err) {
			return res.status(500).send(RESPONSES.INTERNAL_SERVER_ERR);
		} else {
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
					res.status(200).send(RESPONSES.ADDED_SUCCESS);
				}
			});
		}
	});
});

app.post('/api/tool/update', function(req, res) {
	var reqTool = mongoose.Types.ObjectId(req.body.tool);

	User.findOne({_id: sess.user}, function(err, found) {
		if (err) {
			return res.status(500).send(RESPONSES.INTERNAL_SERVER_ERR);
		} else {
			found.lists.forEach(function(list) {
				list.entries.forEach(function(entry, index) {
					if (entry.tool.equals(reqTool)) {
						entry.rating = req.body.rating;
						entry.review = req.body.review;

						if (req.body.list.name !== list.name) {
							console.log(req.body);
							var entryCopy = {
								tool: entry.tool,
								rating: entry.rating,
								review: entry.review
							}
							list.entries.splice(index, 1);
							found.lists[req.body.list.index].entries.push(entryCopy);
						}
					}
				});
			});

			found.markModified('lists');
			found.save(function(err) {
				if (err) {
					return res.status(409).send(RESPONSES.CANT_UPDATE_LIST);
				} else {
					res.status(200).send(RESPONSES.UPDATED_SUCCESS);
				}
			});
		}
	});	
});

app.get('/api/user', function(req, res) {
	User.findOne({username: req.query.username}, function(err, doc) {
		if (doc) {
			if(sess && doc._id.equals(sess.user)) {
				res.send(doc);
			} else {
				var limitedUser = {
					_id: doc._id,
					username: doc.username,
					email: doc.email,
					lists: doc.lists
				}

				res.send(limitedUser);
			}
		} else {
			return res.status(404).send(RESPONSES.INTERNAL_SERVER_ERR);
		}
	});
});

app.post('/api/user', function(req, res) {
	User.findOne({username: req.body.username}, function(err, doc) {
		if (doc) {
			if(sess && doc._id.equals(sess.user)) {
				doc.firstname = req.body.firstname;
				doc.lastname = req.body.lastname;
				doc.githubLink = req.body.githubLink;
				doc.linkedInLink = req.body.linkedInLink;

				doc.save(function(err) {
					if (err) {
						return res.status(500).send(RESPONSES.INTERNAL_SERVER_ERR);
					} else {
						res.status(200).send(RESPONSES.UPDATE_USER_SUCCESS);
					}
				});
			} else {
				return res.status(409).send(RESPONSES.ACCESS_DENIED);
			}
		} else {
			return res.status(404).send(RESPONSES.INTERNAL_SERVER_ERR);
		}
	});
});

app.listen(3000);
console.log('Server up and running on port 3000');