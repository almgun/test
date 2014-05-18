'use strict';

angular.module('testApp')
	.controller('TestCtrl', function ($scope, persist,guestrecord) {
		$scope.gridOptions = { data: 'md',multiSelect:false };
		var gl = persist.collection();

		gl.$on("value", function (a) {
			var data = a.snapshot.value;

			$scope.md = [];
			_.each(data, function (val) {
				//console.log("pushing " + JSON.stringify(val))  ;
				var gr =  guestrecord.create(val);
				var gr1 = {};
				gr1.firstName = gr.firstName
				gr1.lastName = gr.lastName
				gr1.bookRef = gr.bookRef;
				gr1.checkIn = (new Date(gr.checkIn)).toLocaleDateString();
				gr1.checkOut = (new Date(gr.checkOut)).toLocaleDateString();

//				var gr1 = _.pick( gr , function(value, key) {
//					return key === 'firstName' || key === 'lastName' || key === 'bookRef' || key === 'checkIn';
//				});

				$scope.md.push(gr1);
			})
			console.log("complete update " + JSON.stringify($scope.md));
		});
		$scope.create = function() {
			console.log('create..')
			persist.create($scope.guest);
		}
	});
