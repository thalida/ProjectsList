'use strict';

app.factory('LinksDict', [function(){
	var links;

	links = [
		{
			label: 'Personal Site',
			href: 'http://thalida.com',
			title: 'thalida.com'
		},
		{
			label: 'GitHub',
			href: 'http://github.com/thalida',
			title: 'github.com/thalida'
		},
		{
			label: 'Dribbble',
			href: 'http://dribbble.com/thalida',
			title: 'dribbble.com/thalida'
		},
		{
			label: 'Medium',
			href: 'http://medium.com/@thalidanoel',
			title: 'medium.com/thalida'
		},
		{
			label: 'Twitter',
			href: 'http://twitter.com/thalidanoel',
			title: 'thalida.com'
		}
	];

	return {
		get: function(){
			return links;
		}
	};
}]);
