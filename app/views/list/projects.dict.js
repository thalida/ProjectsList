'use strict';

app.factory('ProjectsListDict', [function(){
	var projectsList;

	projectsList = [
		{
			title: 'FancyCard',
			desc: 'Various demos of my personal website (thalida.com) developed in various frameworks and methods. A new demo will be added as the front-end development landscape changes, and will showcase the new techniques that have become part of the modern standard.',
			link: {
				href: 'https://github.com/thalida/FancyCard',
				title: 'GitHub Repo'
			}
		},
		{
			title: 'LadyWrites',
			desc: 'A blog where I will lay down my thoughts regarding the tech community, web development, women, people of color (PoC), LGBTQ community, and other social and technical issues.',
			link: {
				href: '//blog.thalida.com',
				title: 'Vist the Blog'
			}
		},
		{
			title: 'ShapeConnector',
			desc: 'A puzzle game where the goal is to get from one shape to another in a specified amount of moves.',
			link: {
				href: 'http://shapeconnector.com',
				title: 'Vist Website'
			}
		},
		{
			title: 'WordBird',
			desc: 'A chrome plugin which will replace any words you choose with another one.',
			link: {
				href: 'https://github.com/thalida/WordBird',
				title: 'GitHub Repo'
			}
		},
		{
			title: 'EncodeDecode',
			desc: 'A ciphers translator which will encode + decode a given piece of text.'
		}
	];

	return {
		get: function(){
			return projectsList;
		}
	};
}]);
