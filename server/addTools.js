var mongoose = require('mongoose');

module.exports = {
	run: function() {
		var Tool = require('./models/tool');

		Tool.create({
			name: 'AngularJS',
			indexName: 'angularjs',
			description: "AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. Angular's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.",
			link: 'https://angularjs.org/',
			image: 'angularjs.jpg'
		});

		Tool.create({
			name: 'Express',
			indexName: 'express',
			description: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. ",
			link: 'http://expressjs.com/',
			image: 'expressjs.jpg'
		});

		Tool.create({
			name: 'MongoDB',
			indexName: 'mongodb',
			description: "MongoDB is an open source, document-oriented database designed with both scalability and developer agility in mind. Instead of storing your data in tables and rows as you would with a relational database, in MongoDB you store JSON-like documents with dynamic schemas.",
			link: 'https://www.mongodb.org/',
			image: 'mongodb.jpg'
		});

		Tool.create({
			name: 'Node.js',
			indexName: 'nodejs',
			description: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. ",
			link: 'https://nodejs.org/en/',
			image: 'nodejs.jpg'
		});
	}
}