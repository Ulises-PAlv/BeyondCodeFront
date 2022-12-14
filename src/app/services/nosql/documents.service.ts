import { ServerValues, NoSqlPetitions } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IDocumentsPost } from 'src/app/interfaces/documents.interface';

@Injectable({
  providedIn: 'root'
})

export class DocumentsService {

  environment: any;
  petitions: any;

  constructor( private _http: HttpClient ) {
    this.environment = new ServerValues();
    this.petitions = new NoSqlPetitions();
    console.log('DocumentsService Loaded...')
   }

   getDocuments() {
    const url = this.environment.atlas_url + this.petitions.qGet.documents;
    return this._http.get(url).pipe(map( data => {
      console.log(data);
      return data;
    }));
   }

   postDocuments(body: IDocumentsPost) {
    const url = this.environment.atlas_url + this.petitions.qPost.documents;
    this._http.post(url, body).subscribe((res: any) => {
      console.log(res);
    });
  }

  putDocuments() {
    const url = this.environment.atlas_url + this.petitions.qPut.documents;
    return this._http.put(url, null).pipe(map( data => {
      console.log(data);
    }));
   }

   deleteDocumentById(id: string) {
    const url = this.environment.atlas_url + this.petitions.qDelete.documents + id;
    return this._http.delete(url).pipe(map( data => {
      console.log("Deleted Document with ID" + id);
    }));
  }

}