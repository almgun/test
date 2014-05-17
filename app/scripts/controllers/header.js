'use strict';

angular.module('testApp')
  .controller('HeaderCtrl', function ($scope,$location) {
		$scope.isActive = function (viewLocation) {
			return viewLocation === $location.path();
		};
  });
