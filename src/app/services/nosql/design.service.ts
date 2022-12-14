import { ServerValues, NoSqlPetitions } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IDesignPost } from 'src/app/interfaces/design.interface';

@Injectable({
  providedIn: 'root'
})

export class DesignService {

  environment: any;
  petitions: any;

  constructor(private _http: HttpClient) {
    this.environment = new ServerValues();
    this.petitions = new NoSqlPetitions();
    console.log('DesignService Loaded...')
  }

  getDesign() {
    const url = this.environment.atlas_url + this.petitions.qGet.design;
    return this._http.get(url).pipe(map(data => {
      console.log(data);
      return data;
    }));
  }

  postDesign(body: IDesignPost) {
    const url = this.environment.atlas_url + this.petitions.qPost.design;
    this._http.post(url, body).subscribe((res: any) => {
      console.log(res);
    });
  }

  putDesign() {
    const url = this.environment.atlas_url + this.petitions.qPut.design;
    return this._http.put(url, null).pipe(map(data => {
      console.log(data);
    }));
  }

  deleteDesignById(id: string) {
    const url = this.environment.atlas_url + this.petitions.qDelete.design + id;
    return this._http.delete(url).pipe(map(data => {
      console.log("Deleted design with ID" + id);
    }));
  }

}