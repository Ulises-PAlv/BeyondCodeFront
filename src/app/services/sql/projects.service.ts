import { ServerValues, SqlPetitions } from 'src/environments/environment';
import { IProject } from 'src/app/interfaces/project.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  environment: any;
  petitions: any;

  constructor( private _http: HttpClient ) {
    this.environment = new ServerValues();
    this.petitions = new SqlPetitions();
    console.log('ProjectsService Loaded...');
  }

  getProjects() {
    const url = this.environment.mysql_url + this.petitions.qGet.projects;
    return this._http.get(url).pipe(map( data => {
      return data;
    }));
  }

  getProjectById(id: string) {
    const url = this.environment.mysql_url + this.petitions.qGet.project + id;
    return this._http.get(url).pipe(map( data => {
      return data;
    }));
  }

  postProject(body: IProject) {
    const url = this.environment.mysql_url + this.petitions.qPost.project;
    this._http.post(url, body).subscribe((res: any) => {
      console.log(res);
    });
  }
}
