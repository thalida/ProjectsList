'use strict';

app.config([
	'$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/about', {
			template: require('./about.view.html'),
			controller: 'AboutCtrl'
		});
	}
]);
