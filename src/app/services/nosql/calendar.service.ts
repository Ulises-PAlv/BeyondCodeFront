import { ServerValues, NoSqlPetitions } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ICalendar } from 'src/app/interfaces/calendar.interface';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {

  environment: any;
  petitions: any;

  constructor( private _http: HttpClient ) {
    this.environment = new ServerValues();
    this.petitions = new NoSqlPetitions();
    console.log('CalendarService Loaded...')
   }

   getCalendar() {
    const url = this.environment.atlas_url + this.petitions.qGet.calendar;
    return this._http.get(url).pipe(map( data => {
      console.log(data);
      return data;
    }));
   }

   postCalendar(body: ICalendar) {
    const url = this.environment.atlas_url + this.petitions.qPost.calendar;
    this._http.post(url, body).subscribe((res: any) => {
      console.log(res);
    });
  }

  putCalendar() {
    const url = this.environment.atlas_url + this.petitions.qPut.calendar;
    return this._http.put(url, null).pipe(map( data => {
      console.log(data);
    }));
   }

   deleteCalendarById(id: string) {
    const url = this.environment.atlas_url + this.petitions.qDelete.calendar + id;
    return this._http.delete(url).pipe(map( data => {
      console.log("Deleted calendar with ID" + id);
    }));
  }

}