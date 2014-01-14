'use strict';

angular.module('yokuApp').value('Website', {
  name: 'YOKU',
  href: '#',
  footer: 'YoKu 2014'
}).value('Menu', [{
  text: 'Task',
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
