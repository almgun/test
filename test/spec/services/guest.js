'use strict';

describe('Service: guest', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var guest;
  beforeEach(inject(function (_guest_) {
    guest = _guest_;
  }));

  it('should do something', function () {
    expect(!!guest).toBe(true);
  });

});
