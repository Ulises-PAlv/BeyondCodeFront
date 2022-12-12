import { ServerValues, SqlPetitions } from 'src/environments/environment';
import { IUserPost } from 'src/app/interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  environment: any;
  petitions: any;

  constructor( private _http: HttpClient ) {
    this.environment = new ServerValues();
    this.petitions = new SqlPetitions();
    console.log('UsersService Loaded...');
  }

  getUsers() {
    const url = this.environment.mysql_url + this.petitions.qGet.users;
    return this._http.get(url).pipe(map( data => {
      return data;
    }));
  }

  getUserById(id: string) {
    const url = this.environment.mysql_url + this.petitions.qGet.user + id;
    return this._http.get(url).pipe(map( data => {
      return data;
    }));
  }

  postUser(body: IUserPost) {
    const url = this.environment.mysql_url + this.petitions.qPost.user;
    this._http.post(url, body).subscribe((res: any) => {
      console.log(res);
    });
  }
}
