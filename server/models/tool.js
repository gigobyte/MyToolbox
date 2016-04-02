var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var SALT_WORK_FACTOR = 10;

var ToolSchema = new mongoose.Schema({
	name: {type: String, required: true},
	indexName: {type: String, required: true, index: {unique: true}},
	description: {type: String},
	link: {type: String},
	image: {type: String}
});

module.exports = mongoose.model('Tool', ToolSchema)