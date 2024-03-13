(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {

	$scope.name = "Taras";
	$scope.sayHello = function () {
		return "Hello Coursera!";
	}

});

})();