'use strict';

angular.module('yokuApp').service('User', function User() {
  // AngularJS will instantiate a singleton by calling "new" on this function
  this.fname = 'Yogesh';
  this.lname = 'Kumar';
  this.fullname = this.fname + ' ' + this.lname;
  this.designation = 'Software Engineer';
  this.email = 'yoku2010@gmail.com';
  this.mobile = '8130935784';
  this.photo = 'images/avatar.png';
});
