'use strict';

angular.module('yokuApp').service('User', function User() {
  // AngularJS will instantiate a singleton by calling "new" on this function
  this.id = 1;
  this.fname = 'Yogesh';
  this.lname = 'Kumar';
  this.fullname = this.fname + ' ' + this.lname;
  this.designation = 'Software Engineer';
  this.email = 'yoku2010@gmail.com';
  this.mobile = '8130935784';
  this.photo = 'images/avatar.png';
  this.userData = {
    1: {
      fname: 'Yogesh',
      lname: 'Kumar',
      designation: 'Software Engineer',
      email: 'yoku2010@gmail.com',
      mobile: '8130935784',
      photo: 'images/avatar.png'
    },
    2: {
      fname: 'Amit',
      lname: 'Pandita',
      designation: 'Software Engineer',
      email: 'apandita@gmail.com',
      mobile: '8899453622',
      photo: 'images/avatar1.png'
    },
    3: {
      fname: 'Ankit',
      lname: 'Mittel',
      designation: 'Software Engineer',
      email: 'ankitmittel@gmail.com',
      mobile: '9067890564',
      photo: 'images/avatar2.png'
    }
  };
});
