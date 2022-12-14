import { ServerValues } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MailerService {
  environment: any;

  constructor( private _http: HttpClient ) {
    this.environment = new ServerValues();
    console.log('MailerService Loaded...');
  }

  sendMail(email: string, body: any) {
    const url = this.environment.mailer + '/send/' + email;
    this._http.post(url, body).subscribe((res: any) => {
      console.log(res);
    });
  }
}
