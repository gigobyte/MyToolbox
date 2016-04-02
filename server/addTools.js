var mongoose = require('mongoose');

module.exports = {
	run: function() {
		var Tool = require('./models/tool');

		Tool.create({
			name: 'AngularJS',
			description: "AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. Angular's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.",
			link: 'https://angularjs.org/',
			image: 'angular.jpg'
		});
	}
}