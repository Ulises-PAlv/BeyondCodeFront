import { ServerValues, NoSqlPetitions } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IBacklogPost, ISprintPost } from 'src/app/interfaces/backlog.interface';

@Injectable({
  providedIn: 'root'
})

export class BacklogService {

  environment: any;
  petitions: any;

  constructor(private _http: HttpClient) {
    this.environment = new ServerValues();
    this.petitions = new NoSqlPetitions();
    console.log('BacklogService Loaded...')
  }

  getSprints() {
    const url = this.environment.atlas_url + this.petitions.qGet.backlog;
    return this._http.get(url).pipe(map(data => {
      console.log(data);
      return data;
    }));
  }

  postSprint(body: ISprintPost) {
    const url = this.environment.atlas_url + this.petitions.qPost.backlog;
    this._http.post(url, body).subscribe((res: any) => {
      console.log(res);
    });
  }

  postBacklog(body: IBacklogPost) {
    const url = this.environment.atlas_url + this.petitions.qPost.addBacklog;
    this._http.post(url, body).subscribe((res: any) => {
      console.log(res);
    });
  }

  putSprints() {
    const url = this.environment.atlas_url + this.petitions.qPut.backlog;
    return this._http.put(url, null).pipe(map(data => {
      console.log(data);
    }));
  }

  deleteSprintById(id: string) {
    const url = this.environment.atlas_url + this.petitions.qDelete.backlog + id;
    return this._http.delete(url).pipe(map(data => {
      console.log("Deleted sprint with ID" + id);
    }));
  }

}
