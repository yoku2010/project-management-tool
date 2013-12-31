'use strict';

angular.module('yokuApp').value('Website', {
  name: 'YoKu',
  href: '#',
  footer: 'YoKu 2014'
}).value('Menu', [{
  text: 'Workspace',
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
