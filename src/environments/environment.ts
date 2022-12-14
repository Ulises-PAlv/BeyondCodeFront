// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export class SqlPetitions {
  qGet: any = {
    users: '/users',
    user: '/user/',
    projects: '/projects',
    project: '/project/',
    members: '/members',
    team: '/team/',
    teamsByUser: '/team/user/'
  }

  qPost: any = {
    user: '/user',
    project: '/project',
    member: '/member'
  }

  qDelete: any = {
    member: '/member/'
  }
}

export class NoSqlPetitions {
  qGet: any = {
    backlog: '/Backlog',
    calendar: '/Calendar',
    design: '/Design',
    documents: '/Documents',
    forum: '/Forum',
    versioned: '/Versioned',
    arraystack: '/ArchStack'
  }

  qPost: any = {
    backlog: '/Backlog/create',
    calendar: '/Calendar/create',
    design: '/Design/create',
    documents: '/Documents/create',
    forum: '/Forum/create',
    versioned: '/Versioned/create',
    arraystack: '/ArchStack/create',
    addBacklog: '/Backlog/add',
    addEntry: '/Forum/add',
    addTech: '/ArchStack/add'
  }

  qPut: any = {
    backlog: '/Backlog/update',
    calendar: '/Calendar/update',
    design: '/Design/update',
    documents: '/Documents/update',
    forum: '/Forum/update',
    versioned: '/Versioned/update',
    arraystack: '/ArchStack/update'
  }

  qDelete: any = {
    backlog: '/Backlog/delete:id',
    calendar: '/Calendar/delete:id',
    design: '/Design/delete:id',
    documents: '/Documents/delete:id',
    forum: '/Forum/delete:id',
    versioned: '/Versioned/delete/:id',
    arraystack: '/ArchStack/delete:id'
  }
}

export class ServerValues {
  mysql_url: string = 'http://localhost:3000';
  atlas_url: string = 'http://localhost:5000';
  storage_url: string = '';
  mailer: string = 'http://localhost:3001';
}