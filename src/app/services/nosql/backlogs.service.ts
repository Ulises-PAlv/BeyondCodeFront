import { ServerValues, NoSqlPetitions } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BacklogsService {
  environment: any;
  petitions: any;

  constructor( private _http: HttpClient ) {
    this.environment = new ServerValues();
    this.petitions = new NoSqlPetitions();
    console.log('UsersService Loaded...');
  }

  getSprints() {
    const url = this.environment.atlas_url + this.petitions.qGet.backlog;
    return this._http.get(url).pipe(map( data => {
      console.log(data);
      return data;
    }));
  }

}
