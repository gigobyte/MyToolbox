var mongoose = require('mongoose');

module.exports = {
	run: function() {
		var Tool = require('./models/tool');

		Tool.create({
			name: 'AngularJS',
			indexName: 'angularjs',
			description: "AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. And it all happens within the browser, making it an ideal partner with any server technology.",
			link: 'https://angularjs.org/',
			language: 'JavaScript',
			image: 'angularjs.jpg'
		});

		Tool.create({
			name: 'Express',
			indexName: 'express',
			description: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. ",
			link: 'http://expressjs.com/',
			language: 'JavaScript',
			image: 'express.jpg'
		});

		Tool.create({
			name: 'MongoDB',
			indexName: 'mongodb',
			description: "MongoDB is an open source, document-oriented database designed with both scalability and developer agility in mind. Instead of storing your data in tables and rows as you would with a relational database, in MongoDB you store JSON-like documents with dynamic schemas.",
			link: 'https://www.mongodb.org/',
			language: 'Other/Database',
			image: 'mongodb.jpg'
		});

		Tool.create({
			name: 'Node.js',
			indexName: 'nodejs',
			description: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. ",
			link: 'https://nodejs.org/en/',
			language: 'JavaScript',
			image: 'nodejs.jpg'
		});
		
		Tool.create({
			name: 'APS.NET',
			indexName: 'aspnet',
			description: 'ASP.NET 5 is a new open-source, cross-platform, high performance and lightweight framework for building Web Applications using .NET.',
			link: 'http://www.asp.net/',
			language: 'C#',
			image: 'aspnet.jpg'
		});
		
		Tool.create({
			name: 'Ruby on Rails',
			indexName: 'rubyonrails',
			description: 'Rails is a web application development framework written in the Ruby language. It is designed to make programming web applications easier by making assumptions about what every developer needs to get started. It allows you to write less code while accomplishing more than many other languages and frameworks.',
			link: 'http://rubyonrails.org/',
			language: 'Ruby',
			image: 'rubyonrails.jpg'
		});
		
		Tool.create({
			name: 'Django',
			indexName: 'django',
			description: 'Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.',
			link: 'https://www.djangoproject.com/',
			language: 'Python',
			image: 'django.jpg'
		});
		
		Tool.create({
			name: 'Meteor',
			indexName: 'meteor',
			description: 'Meteor is a full-stack JavaScript platform for developing modern web and mobile applications. Meteor includes a key set of technologies for building connected-client reactive applications, a build tool, and a curated set of packages from the Node.js and general JavaScript community.',
			link: 'https://www.meteor.com/',
			language: 'JavaScript',
			image: 'meteor.jpg'
		});
		
		Tool.create({
			name: 'Laravel',
			indexName: 'laravel',
			description: 'Laravel is a free, open-source PHP web framework, intended for the development of web applications following the model–view–controller (MVC) architectural pattern. Some of the features of Laravel are a modular packaging system with a dedicated dependency manager, different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and its orientation toward syntactic sugar.',
			link: 'https://laravel.com/',
			language: 'PHP',
			image: 'laravel.jpg'
		});
		
		Tool.create({
			name: 'Spring',
			indexName: 'spring',
			description: 'The Spring Framework is a Java platform that provides comprehensive infrastructure support for developing Java applications. Spring handles the infrastructure so you can focus on your application.',
			link: 'http://spring.io/',
			language: 'Java',
			image: 'spring.jpg'
		});
		
		Tool.create({
			name: 'CodeIgniter',
			indexName: 'codeigniter',
			description: 'CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications.',
			link: 'https://www.codeigniter.com/',
			language: 'PHP',
			image: 'codeigniter.jpg'
		});
		
		Tool.create({
			name: 'Symfony',
			indexName: 'symfony',
			description: 'Symfony is a set of PHP Components, a Web Application framework, a Philosophy, and a Community — all working together in harmony.',
			link: 'http://symfony.com/',
			language: 'PHP',
			image: 'symfony.jpg'
		});
		
		Tool.create({
			name: 'Ember.js',
			indexName: 'emberjs',
			description: 'A framework for creating ambitious web applications.',
			link: 'http://emberjs.com/',
			language: 'JavaScript',
			image: 'emberjs.jpg'
		});
		
		Tool.create({
			name: 'Flask',
			indexName: 'flask',
			description: 'Flask is a microframework for Python based on Werkzeug, Jinja 2 and good intentions.',
			link: 'http://flask.pocoo.org/',
			language: 'Python',
			image: 'flask.jpg'
		});
		
		Tool.create({
			name: 'JSF',
			indexName: 'jsf',
			description: 'JavaServer™ Faces (JSF) is the standard component-oriented user interface (UI) framework for the Java EE platform. ',
			link: 'http://emberjs.com/',
			language: 'Java',
			image: 'jsf.jpg'
		});
	}
}
