'use strict';

describe('Service: Website', function () {

  // load the service's module
  beforeEach(module('yokuApp'));

  // instantiate service
  var Website;
  beforeEach(inject(function (_Website_) {
    Website = _Website_;
  }));

  it('should do something', function () {
    expect(!!Website).toBe(true);
  });

});
