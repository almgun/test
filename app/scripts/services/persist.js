'use strict';

angular.module('testApp')
	.factory('persist', function (guestrecord,$firebase) {

		var guestRef = new Firebase("https://gatestdb.firebaseio.com/guest");
		var guests = $firebase(guestRef);

		// Public API here
		var retVal =  {
			test:function(rec) {
			    guestRef.child('').set(rec);
			}  ,
			create: function (rec) {
				if(rec){
					if (guestrecord.duckTest(rec)) {
						rec.bookRef = rec.bookRef || guestrecord.randomRef();
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
		return Object.freeze(retVal);
	});
