'use strict';

angular.module('yokuApp')
  .service('Workspace', function Workspace() {
    // AngularJS will instantiate a singleton by calling 'new' on this function
    this.status = {
      0: 'Inompleted',
      1: 'Completed',
      2: 'Unassigned'
    };
    this.workspace = [
      {
        id: 1,
        name: 'Personal workspace',
        member:['yoku2010@gmail.com'],
        description: 'This is my Personal workspace',
        fix: true,
        projects: [
          {
            id: 1,
            name: 'Fetch IT',
            description: '',
            tasks:[
              {
                id: 1,
                name: 'UI Designing',
                description: '',
                creation: '30-12-2013',
                updation: '31-12-2013',
                duedate: '02-01-2014',
                status: 0,
                assignTo: ['yoku2010@gmail.com'],
                followers: ['yoku2010@gmail.com'],
                comments: [],
                logs: []
              }
            ]
          },
          {
            id: 1,
            name: 'YoKu',
            description: '',
            tasks:[
              {
                id: 1,
                name: 'UI Designing',
                description: '',
                creation: '30-12-2013',
                updation: '31-12-2013',
                duedate: '02-01-2014',
                status: 0,
                assignTo: ['yoku2010@gmail.com'],
                followers: ['yoku2010@gmail.com'],
                comments: [],
                logs: []
              }
            ]
          }
        ]
      }
    ];
  });
