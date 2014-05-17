'use strict';

describe('Service: persist', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var persist;
  beforeEach(inject(function (_persist_) {
    persist = _persist_;
  }));

  it('should do something', function () {
    expect(!!persist).toBe(true);
  });

});
