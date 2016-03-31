var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	username: String,
	email: String,
	password: String,
	githubLink: String,
	linkedInLink: String,
	avatar: String
});

module.exports = mongoose.model('User', userSchema)