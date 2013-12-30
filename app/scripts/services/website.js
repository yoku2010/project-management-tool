'use strict';

angular.module('yokuApp').value('$website', {
  name: 'YoKu',
  href: '#',
  footer: 'YoKu 2014'
}).value('$menu', [{
  text: 'Project',
  href: '#',
  className: 'active'
},{
  text: 'Timesheet',
  href: '#/',
  className: ''
},{
  text: 'Settings',
  href: '#/',
  className: ''
},{
  text: 'Logout',
  href: '#/',
  className: ''
}]);
