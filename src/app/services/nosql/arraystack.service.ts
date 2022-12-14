import { ServerValues, NoSqlPetitions } from 'src/environments/environment';
import { IArchStackPost, ITechStackPost } from 'src/app/interfaces/arraystack.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class arrayStackService {

  environment: any;
  petitions: any;

  constructor(private _http: HttpClient) {
    this.environment = new ServerValues();
    this.petitions = new NoSqlPetitions();
    console.log('arrayStackService Loaded...')
  }

  getTechStack() {
    const url = this.environment.atlas_url + this.petitions.qGet.arraystack;
    return this._http.get(url).pipe(map(data => {
      return data;
    }));
  }

  postArchStack(body: IArchStackPost) {
    const url = this.environment.atlas_url + this.petitions.qPost.arraystack;
    this._http.post(url, body).subscribe((res: any) => {
      console.log(res);
    });
  }

  postTech(body: ITechStackPost) {
    const url = this.environment.atlas_url + this.petitions.qPost.addTech;
    this._http.post(url, body).subscribe((res: any) => {
      console.log(res);
    });
  }

  putArchStack() {
    const url = this.environment.atlas_url + this.petitions.qPut.arraystack;
    return this._http.put(url, null).pipe(map(data => {
      console.log(data);
    }));
  }

  deleteArchStackById(id: string) {
    const url = this.environment.atlas_url + this.petitions.qDelete.arraystack + id;
    return this._http.delete(url).pipe(map(data => {
      console.log("Deleted TechStack with ID" + id);
    }));
  }

}