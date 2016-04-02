var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
	firstname: {type: String},
	lastname: {type: String},
	username: {type: String, required: true, index: {unique: true}},
	email: {type: String, required: true, index: {unique: true}},
	password: {type: String, required: true},
	githubLink: {type: String},
	linkedInLink: {type: String}
});

UserSchema.pre('save', function(next) {
	var user = this;

	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if (err) return next(err);

		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) return next(err);

			user.password = hash;
			next();
		});
	});
});

module.exports = mongoose.model('User', UserSchema)