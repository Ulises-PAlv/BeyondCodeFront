import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/sql/users.service';
import { IUserGet } from 'src/app/interfaces/user.interface';
import { DateHelper } from 'src/app/helpers/dateJS.helper';
import { NotifierService } from 'angular-notifier';
import { TeamsService } from 'src/app/services/sql/teams.service';
import { LsHelper } from 'src/app/helpers/localstorage.helper';
import { MailerService } from 'src/app/services/apis/mailer.service';

@Component({
  selector: 'app-memorandum',
  templateUrl: './memorandum.component.html',
  styleUrls: ['./memorandum.component.scss']
})

export class MemorandumComponent implements OnInit {
  prs: any;
  arrayUsers: IUserGet[] = [];
  membersList: string[] = [];
  memberObjList: IUserGet[] = [];
  objUser: IUserGet = {
    id: 0,
    name: '',
    email: '',
    password: '',
    registration_date: ''
  };

  constructor( private _users: UsersService, private _teams: TeamsService, private _mailer: MailerService,
    private _notifier: NotifierService ) { }

  searchEmails(name: string) {
    this.arrayUsers.forEach((user: any) => {
      if(user.name == name) {
        this.memberObjList.push(user);
      }
    });
  }

  addToList(member: any):void {
    this.membersList.push(member);
    this.load();
  }

  sendMemo(topic: string, date: any, message: string) {
    let objMail: any = {
      topic: topic,
      date: date,
      message: message
    }

    for(let i = 0; i < this.membersList.length; i++) {
      this.searchEmails(this.membersList[i]);
    }
    
    this.memberObjList.forEach(async (user: IUserGet) => {
      await this._mailer.sendMail(user.email, objMail);
    });
    this.showNotification('success', 'Minutas enviadas');
  }

  async load() {
    this.membersList = this.membersList
  }

  async getUsersById(id: string) {
    await this._users.getUserById(id).subscribe((data: any) => {
      console.log(data[0]);
      this.arrayUsers.push(data[0]);
      this.arrayUsers.flat();
    });
  }

  public showNotification( type: string, message: string ): void {
		this._notifier.notify( type, message );
	}

  ngOnInit(): void {
    this.prs = LsHelper.getItem('prs');
    this._teams.getTeamById(this.prs.project_id).subscribe((res: any) => {
      let ids: number[] = [];
      res.forEach((team: any) => {
        ids.push(team.user_id);
      });

      for(let i = 0; i < ids.length; i++) {
        this.getUsersById(ids[i].toString());
      }
    });
  }
}
