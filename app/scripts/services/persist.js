'use strict';

angular.module('testApp')
	.factory('persist', function (guestrecord,$firebase) {

		var guestRef = new Firebase("https://gatestdb.firebaseio.com/guest");
		var guests = $firebase(guestRef);

		// Public API here
		return {
			test:function(rec) {
			    guestRef.child('').set(rec);
			}  ,
			create: function (rec) {
				if(rec && rec.bookRef){
					if (guestrecord.duckTest(rec)) {
						guests.$add(rec);
					}
				}
			},
			update: function (rec) {
				if (guestrecord.duckTest(rec)) {


				}
			},
			collection: function (rec) {
				return guests;
			}
		};
	});
