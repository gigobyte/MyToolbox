var mongoose = require('mongoose');

var ToolSchema = new mongoose.Schema({
	name: {type: String, required: true},
	indexName: {type: String, required: true, index: {unique: true}},
	description: {type: String},
	link: {type: String},
	image: {type: String}
});

module.exports = mongoose.model('Tool', ToolSchema)