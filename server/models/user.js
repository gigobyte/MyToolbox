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
	linkedInLink: {type: String},
	lists: {type: []}
});

UserSchema.pre('save', function(next) {
	var user = this;

	if(user.isNew) {
		bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
			if (err) return next(err);

			bcrypt.hash(user.password, salt, null, function(err, hash) {
				if (err) return next(err);

				user.password = hash;
				next();
			});
		});
	} else {
		next();
	}
});

UserSchema.path('username').validate(function(value) {
	return value && /^[a-zA-Z0-9_]*$/.test(value);
}, 'Invalid username');

UserSchema.path('username').validate(function(value) {
	return value && value.length > 4 && value.length < 30;
}, 'Username should be between 5 and 30 characters long');

UserSchema.path('password').validate(function(value) {
	return value && /^[A-Za-z0-9_@.#&+-/$]*$/.test(value);
}, 'Invalid password');

UserSchema.path('password').validate(function(value) {
	return value && value.length > 5;
}, 'Password should be at least 6 characters long');

UserSchema.path('email').validate(function(value) {
	return value && value.indexOf('@') >= 0;
}, 'Invalid email');

module.exports = mongoose.model('User', UserSchema)