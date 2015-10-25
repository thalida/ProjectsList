'use strict';

app.config([
	'$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/list', {
			template: require('./list.view.html'),
			controller: 'ListCtrl',
			controllerAs: 'list'
		});
	}
]);
