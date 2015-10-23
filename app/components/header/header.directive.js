'use strict';

app.directive('appHeader', [function(){
	return {
		restrict: 'E',
		template: require('./header.html'),
		link: function($scope, $el, attrs, controller) {

		}
	};
}]);
