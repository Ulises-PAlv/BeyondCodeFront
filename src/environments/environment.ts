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

  }

  qPost: any = {

  }
}

export class ServerValues {
  mysql_url: string = 'http://localhost:3000';
  atlas_url: string = '';
  storage_url: string = '';
  mailer: string = '';
}