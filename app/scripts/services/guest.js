'use strict';

angular.module('testApp')
	.factory('guestrecord', function () {

		var rec = {
			firstName: "",
			lastName: "",
			bookRef: "",
			email: "",
			phone: "",
			checkIn: new Date(),
			checkOut: new Date(),
			dueDate1: new Date(),
			dueDate2: new Date(),
			payDate1: new Date(),
			payDate2: new Date(),
			payedTo: "",
			prospSource: "",
			opt: 0,
			totPayment: 0,
			comment: ""
		};
		return {
			create: function (first, last, ref) {
				var newRec = angular.copy(rec);
				if (typeof first === 'object') {
					_.forEach(rec, function (val, key) {
						if (first[key]) {
							newRec[key] = first[key];
						}
					});
				}
				else {
					newRec.firstName = first || "";
					newRec.lastName = last || "";
					newRec.bookRef = ref || "";
				}
				return Object.freeze(newRec);
			},

			duckTest: function (obj) {
				var ret = true;
				if (typeof obj !== 'object') {
					return false;
				}
				_.forEach(obj, function (val, key) {
					if (!_.has(rec, key)) {
						ret = false;
						return false;
					}
				});
				return ret;
			}

		}
	});
