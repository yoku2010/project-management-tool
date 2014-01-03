'use strict';

angular.module('yokuApp')
  .service('Workspace', function Workspace() {
    // AngularJS will instantiate a singleton by calling 'new' on this function
    this.workspaceStatus = {
      0: 'Inompleted',
      1: 'Completed',
      2: 'Unassigned'
    };
    this.workspaceType = [
      {
        'name': 'Personal',
        'icon': 'user'
      },
      {
        'name': 'Official',
        'icon': 'briefcase'
      },
      {
        'name': 'Other',
        'icon': 'th'
      }
    ];
    this.workspace = [
      {
        id: 1,
        name: 'Personal workspace',
        member:['yoku2010@gmail.com'],
        description: 'This is my Personal workspace',
        fix: true,
        type: 'Personal',
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
      },
      {
        id: 2,
        name: 'Codescape',
        member:['yoku2010@gmail.com'],
        description: 'This is my Company workspace',
        fix: true,
        type: 'Personal',
        projects: [
          {
            id: 1,
            name: 'NMS',
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
            name: 'HTML5 Game',
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
    this.addWorkspace = function(name, member, type, description) {
      this.workspace.push({
        id: parseInt(Math.random()*1000,10),  // JUGAAD
        name: name,
        member: member,
        description: description,
        fix: false,
        type: type,
        projects: []
      });
    }
    this.editWorkspace = function(index, name, member, type, description) {
      this.workspace[index].name = name;
      this.workspace[index].member = member;
      this.workspace[index].description = description;
      this.workspace[index].type = type;
    }
    this.deleteWorkspace = function(index) {
      this.workspace.slice(index,1);
    }
  });
