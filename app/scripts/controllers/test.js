'use strict';

angular.module('testApp')
	.controller('TestCtrl', function ($scope, persist) {
		$scope.myData = [
			{name: "Moroni", age: 50},
			{name: "Tiancum", age: 43},
			{name: "Jacob", age: 27},
			{name: "Nephi", age: 29},
			{name: "Enos", age: 34}
		];

		$scope.mda = [
			{"bookRef": "00002", "firstName": "sha", "lastName": "ssasaas","test":"sss"},
			{"bookRef": "0004", "firstName": "test", "lastName": "jjjjjh"},
			{"bookRef": "0005", "firstName": "hhaa", "lastName": "ahhaah"},
			{"bookRef": "002", "firstName": "hahah", "lastName": "ahah","test":"aaa"},
			{"bookRef": "12345", "firstName": "hshs", "lastName": "ahahah"},
			{"bookRef": "1234", "firstName": "ssaa", "lastName": "asasasa"}
		];
		$scope.gridOptions = { data: 'md' };

		var gl = persist.collection();

		gl.$on("value", function (a) {
			var data = a.snapshot.value;
			$scope.md = [];
			_.each(data, function (val) {
				//	console.log(val);
				$scope.md.push(val);
			})
			console.log("complete update " + JSON.stringify($scope.md));
		})
	});
