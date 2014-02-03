'use strict';

describe('Directive: slideToggle', function () {

  // load the directive's module
  beforeEach(module('yokuApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<slide-toggle></slide-toggle>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the slideToggle directive');
  }));
});
