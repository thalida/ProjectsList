'use strict';

app.config([
	'$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/links', {
			template: require('./links.view.html'),
			controller: 'LinksCtrl',
			controllerAs: 'links'
		});
	}
]);

app.controller('LinksCtrl', [
	'LinksDict',
	function(LinksDict) {
		this.social = LinksDict.get();
	}
]);
