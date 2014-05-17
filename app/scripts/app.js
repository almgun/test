'use strict';

angular
	.module('testApp', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngRoute',
		'firebase'

	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/guest', {
				templateUrl: 'views/guest.html',
				controller: 'GuestCtrl'
			})
			.when('/test', {
				templateUrl: 'views/test.html',
				controller: 'TestCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
