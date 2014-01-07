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
        name: 'Personal Workspace',
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
        fix: false,
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
      var id = parseInt(Math.random()*1000,10);  // JUGAAD
      this.workspace.push({
        id: id,
        name: name,
        member: member,
        description: description,
        fix: false,
        type: type,
        projects: []
      });
      return id;
    }
    this.getWorkspaceById = function(id) {
      for (var i = 0, ln = this.workspace.length; i < ln; i++) {
        if (id == this.workspace[i].id) {
          return {
            name: this.workspace[i].name,
            member: this.workspace[i].member,
            description: this.workspace[i].description,
            type: this.workspace[i].type
          };
        }
      }
    }
    this.editWorkspace = function(index, name, member, type, description) {
      this.workspace[index].name = name;
      this.workspace[index].member = member;
      this.workspace[index].description = description;
      this.workspace[index].type = type;
      return this.workspace[index].id;
    }
    this.editWorkspaceById = function(id, name, member, type, description) {
      for (var i = 0, ln = this.workspace.length; i < ln; i++) {
        if (id == this.workspace[i].id) {
          this.workspace[i].name = name;
          this.workspace[i].member = member;
          this.workspace[i].description = description;
          this.workspace[i].type = type;
          break;
        }
      }
      return id;
    }
    this.deleteWorkspace = function(index) {
      this.workspace.splice(index,1);
    }
    this.deleteWorkspaceById = function(id) {
      for (var i = 0, ln = this.workspace.length; i < ln; i++) {
        if (id == this.workspace[i].id) {
          this.workspace.splice(i,1);
          break;
        }
      }
    }
  });
