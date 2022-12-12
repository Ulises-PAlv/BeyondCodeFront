import { ServerValues, SqlPetitions } from 'src/environments/environment';
import { ITeam } from 'src/app/interfaces/team.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TeamsService {
  environment: any;
  petitions: any;

  constructor( private _http: HttpClient ) {
    this.environment = new ServerValues();
    this.petitions = new SqlPetitions();
    console.log('TeamsService Loaded...');
  }

  getMembers() {
    const url = this.environment.mysql_url + this.petitions.qGet.members;
    return this._http.get(url).pipe(map( data => {
      return data;
    }));
  }

  getTeamById(id: string) {
    const url = this.environment.mysql_url + this.petitions.qGet.team + id;
    return this._http.get(url).pipe(map( data => {
      return data;
    }));
  }

  getTeamByUser(id: string) {
    const url = this.environment.mysql_url + this.petitions.qGet.teamsByUser + id;
    return this._http.get(url).pipe(map( data => {
      return data;
    }));
  }

  postMember(body: ITeam) {
    const url = this.environment.mysql_url + this.petitions.qPost.member;
    this._http.post(url, body).subscribe((res: any) => {
      console.log(res);
    });
  }
}
