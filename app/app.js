'use strict';

require('angular');

window.app = angular.module('myApp', [
	require('angular-route'),
	require('angular-sanitize'),
	require('angular-animate')
]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/list'});
}]);

app.run([function(){

}]);

require('./views');
