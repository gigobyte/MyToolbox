var mongoose = require('mongoose');

var ToolSchema = new mongoose.Schema({
	name: {type: String, required: true},
	indexName: {type: String, required: true, index: {unique: true}},
	description: {type: String, required: true},
	link: {type: String, required: true},
	image: {type: String, required: true},
	language: {type: String, required: true}
});

module.exports = mongoose.model('Tool', ToolSchema)