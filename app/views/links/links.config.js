'use strict';

app.config([
	'$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/links', {
			template: require('./links.view.html'),
			controller: 'LinksCtrl'
		});
	}
]);
