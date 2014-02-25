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
        name: 'Personal',
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
                status: 1,
                assignTo: ['yoku2010@gmail.com'],
                followers: ['yoku2010@gmail.com'],
                comments: [],
                logs: []
              }
            ]
          },
          {
            id: 2,
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
                status: 1,
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
                description: 'This is for UI Designing using bootstrap 3.0.',
                creation: '30-12-2013',
                updation: '31-12-2013',
                duedate: '02-01-2014',
                status: 0,
                assignTo: ['yoku2010@gmail.com'],
                followers: ['yoku2010@gmail.com'],
                comments: [],
                logs: []
              },
              {
                id: 2,
                name: 'Coding',
                description: '',
                creation: '30-12-2013',
                updation: '31-12-2013',
                duedate: '02-01-2014',
                status: 1,
                assignTo: ['yoku2010@gmail.com'],
                followers: ['yoku2010@gmail.com'],
                comments: [],
                logs: []
              },
              {
                id: 3,
                name: 'Testing',
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
            id: 2,
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
                status: 1,
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
    };
    this.getWorkspaceById = function(id) {
      for (var i = 0, ln = this.workspace.length; i < ln; i++) {
        if (id == this.workspace[i].id) {
          return [this.workspace[i], {
            name: this.workspace[i].name,
            member: this.workspace[i].member,
            description: this.workspace[i].description,
            type: this.workspace[i].type
          }];
        }
      }
    };
    this.editWorkspaceById = function(id, name, member, type, description) {
      for (var i = 0, ln = this.workspace.length; i < ln; i++) {
        if (id == this.workspace[i].id) {
          this.workspace[i].name = name;
          this.workspace[i].member = member;
          this.workspace[i].description = description;
          this.workspace[i].type = type;
          return id;
        }
      }
    };
    this.deleteWorkspace = function(index) {
      this.workspace.splice(index,1);
    };
    this.deleteWorkspaceById = function(id) {
      for (var i = 0, ln = this.workspace.length; i < ln; i++) {
        if (id == this.workspace[i].id) {
          this.workspace.splice(i,1);
          return true;
        }
      }
    };
    this.getProjectById = function (wid, pid) {
      for (var i = 0, ln = this.workspace.length; i < ln; i++) {
        if (wid == this.workspace[i].id) {
          if (void 0 != this.workspace[i].projects) {
            for (var j = 0, pln = this.workspace[i].projects.length; j < pln; j++ ) {
              if (pid == this.workspace[i].projects[j].id) {
                return [this.workspace[i], this.workspace[i].projects[j], {
                  name: this.workspace[i].projects[j].name,
                  description: this.workspace[i].projects[j].description,
                  wid: this.workspace[i].id
                }];
              }
            }
          }
        }
      }
    };
    this.addProject = function (name, wid, description) {
      var pid = parseInt(Math.random()*1000,10);  // JUGAAD
      for (var i = 0, ln = this.workspace.length; i < ln; i++) {
        if (wid == this.workspace[i].id) {
          if (void 0 == this.workspace[i].projects) {
            this.workspace[i].projects = [];
          }
          this.workspace[i].projects.push({
            id: pid,
            name: name,
            description: description,
            tasks: []
          });
          return pid;
        }
      }
    };
    this.editProject = function (pid, name, wid, description) {
      for (var i = 0, ln = this.workspace.length; i < ln; i++) {
        if (wid == this.workspace[i].id) {
          if (void 0 != this.workspace[i].projects) {
            for (var j = 0, pln = this.workspace[i].projects.length; j < pln; j++ ) {
              if (pid == this.workspace[i].projects[j].id) {
                this.workspace[i].projects[j].name = name;
                this.workspace[i].projects[j].description = description;
                return pid;
              }
            }
          }
        }
      }
    };
    this.deleteProjectById = function(wid, pid) {
      for (var i = 0, ln = this.workspace.length; i < ln; i++) {
        if (wid == this.workspace[i].id) {
          if (void 0 != this.workspace[i].projects) {
            for (var j = 0, pln = this.workspace[i].projects.length; j < pln; j++ ) {
              if (pid == this.workspace[i].projects[j].id) {
                this.workspace[i].projects.splice(j, 1);
                return true;
              }
            }
          }
        }
      }
    };
    this.getTaskById = function (wid, pid, tid) {
      for (var i = 0, ln = this.workspace.length; i < ln; i++) {
        if (wid == this.workspace[i].id) {
          if (void 0 != this.workspace[i].projects) {
            for (var j = 0, pln = this.workspace[i].projects.length; j < pln; j++ ) {
              if (pid == this.workspace[i].projects[j].id) {
                var task = null, tln = this.workspace[i].projects[j].tasks.length;
                for (var k = 0; k < tln; k++ ) {
                  if (tid == this.workspace[i].projects[j].tasks[k].id) {
                    task = this.workspace[i].projects[j].tasks[k];
                    break;
                  }
                }
                if (void 0 == task) {
                  if (tln > 0) {
                    task = this.workspace[i].projects[j].tasks[0];
                  }
                  else {
                    task = {};
                  }
                }
                return [this.workspace[i], this.workspace[i].projects[j], task];
              }
            }
          }
        }
      }
    };
  });
