import { ServerValues, NoSqlPetitions } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IVersionedPost } from 'src/app/interfaces/versioned.interface';

@Injectable({
  providedIn: 'root'
})

export class VersionedService {

  environment: any;
  petitions: any;

  constructor(private _http: HttpClient) {
    this.environment = new ServerValues();
    this.petitions = new NoSqlPetitions();
    console.log('VersionedService Loaded...')
  }

  getVersion() {
    const url = this.environment.atlas_url + this.petitions.qGet.versioned;
    return this._http.get(url).pipe(map(data => {
      return data;
    }));
  }

  postVersion(body: IVersionedPost) {
    const url = this.environment.atlas_url + this.petitions.qPost.versioned;
    this._http.post(url, body).subscribe((res: any) => {
      console.log(res);
    });
  }

  putVersion() {
    const url = this.environment.atlas_url + this.petitions.qPut.versioned;
    return this._http.put(url, null).pipe(map(data => {
      console.log(data);
    }));
  }

  deleteVersionById(id: string) {
    const url = this.environment.atlas_url + this.petitions.qDelete.versioned + id;
    return this._http.delete(url).pipe(map(data => {
      console.log("Deleted versioned with ID" + id);
    }));
  }

}