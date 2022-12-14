import { ServerValues, NoSqlPetitions } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IEntriesPost, IForumPost } from 'src/app/interfaces/forum.interface';

@Injectable({
  providedIn: 'root'
})

export class ForumService {

  environment: any;
  petitions: any;

  constructor(private _http: HttpClient) {
    this.environment = new ServerValues();
    this.petitions = new NoSqlPetitions();
    console.log('ForumService Loaded...')
  }

  getForum() {
    const url = this.environment.atlas_url + this.petitions.qGet.forum;
    return this._http.get(url).pipe(map(data => {
      return data;
    }));
  }

  postForum(body: IForumPost) {
    const url = this.environment.atlas_url + this.petitions.qPost.forum;
    this._http.post(url, body).subscribe((res: any) => {
      console.log(res);
    });
  }

  postEntry(body: IEntriesPost) {
    const url = this.environment.atlas_url + this.petitions.qPost.addEntry;
    this._http.post(url, body).subscribe((res: any) => {
      console.log(res);
    });
  }

  putForum() {
    const url = this.environment.atlas_url + this.petitions.qPut.forum;
    return this._http.put(url, null).pipe(map(data => {
      console.log(data);
    }));
  }

  deleteForumById(id: string) {
    const url = this.environment.atlas_url + this.petitions.qDelete.forum + id;
    return this._http.delete(url).pipe(map(data => {
      console.log("Deleted forum with ID" + id);
    }));
  }

}