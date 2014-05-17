'use strict';

angular.module('testApp')
	.controller('GuestCtrl', function ($scope, guestrecord, persist) {
		$scope.guest1 = guestrecord.create();
		$scope.guest2 = guestrecord.create("petter", "pan");
		$scope.guest3 = guestrecord.create({prospSource: "paypal", totPayment: 100});
		//$scope.test = guestrecord.duckTest({prospSource: "paypal", totPayment: 100});
		$scope.test = persist.create({prospSource: "paypal", toPayment: 100});

		$scope.add = function () {
			persist.create($scope.guest);
			$scope.guest.bookRef = "";
		}

		$scope.test = function () {
			persist.test($scope.guest);
		}

		var gl = persist.collection();


		gl.$on("loaded", function(a) {
		//	console.log("Initial data received! " + JSON.stringify(a.snapshot.snapshor));
		});

		gl.$on("value", function(a) {

			//var data1 = a.val();    // ?? kanskje heller sånn
			//data.name()  data.val()
			var data =  a.snapshot.value;



			console.log("complete update " + JSON.stringify(data));

			var found = _.findKey(data, function(chr) {
				return chr.bookRef === '00001';
			});
			if(found){
				console.error(JSON.stringify(data[found]));
			}
			else
			{
				console.error('found - undefined');
			}

		});

		gl.$on("child_added", function(a) {
			console.log("Addding " + JSON.stringify(a));
		});

		gl.$on("child_removed", function(a) {
			console.log("Removing " + JSON.stringify(a));
		});

		gl.$on("child_changed", function(a,b) {
			console.log("changed from " + JSON.stringify(a) + " to " + JSON.stringify(a,b));
		});

		var idx = gl.$getIndex();


	//	var gl1 = JSON.parse(gl);
		  $scope.guestList = gl;
		//_.forIn( gl,function ( key,val) {
		//	console.log(key);
		//})

		//persist.create(guestrecord.create("ole", "brumm"));


	});
