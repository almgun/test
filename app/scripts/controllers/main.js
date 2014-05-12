'use strict';

angular.module('testApp')
  .controller('MainCtrl', function ($scope,$firebase) {

		var peopleRef = new Firebase("https://gatestdb.firebaseio.com/people1");
		$scope.people = $firebase(peopleRef);
		$scope.addPerson = function() {
			// AngularFire $add method
			$scope.people.$add($scope.newPerson);

			//or add a new person manually
			//peopleRef.update({name: 'Alex', age: 35});

			$scope.newPerson = "";
		}

		$scope.listPersons = function() {
			var keys = $scope.people.$getIndex();
			keys.forEach(function(key, i) {
				console.log(i, $scope.people[key]); // Prints items in order they appear in Firebase.
			});
		}

    $scope.names = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
