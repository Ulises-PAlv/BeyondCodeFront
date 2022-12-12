import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/sql/users.service';
import { IUserGet } from 'src/app/interfaces/user.interface';
import { DateHelper } from 'src/app/helpers/dateJS.helper';
import { NotifierService } from 'angular-notifier';
import { TeamsService } from 'src/app/services/sql/teams.service';

@Component({
  selector: 'app-memorandum',
  templateUrl: './memorandum.component.html',
  styleUrls: ['./memorandum.component.scss']
})
export class MemorandumComponent implements OnInit {
  arrayUsers: IUserGet[] = [];
  membersList: IUserGet[] = [];
  objUser: IUserGet = {
    id: 0,
    name: '',
    email: '',
    password: '',
    registration_date: ''
  };

  constructor(private _users: UsersService, private _teams: TeamsService ) { }

  addToList(e: any):void {
    console.log(e)
    console.log('oya')
    this.membersList.push();
    this.reload();
  }

  reload() { }

  async getUsersById(id: string) {
    await this._users.getUserById(id).subscribe((data: any) => {
      console.log(data[0]);
      this.arrayUsers.push(data[0]);
      this.arrayUsers.flat();
    });
  }

  ngOnInit(): void {
    // !!  sacar de LS el numero del equipo encriptado y descencriptarlo para mandarlo de parametro
    this._teams.getTeamById('1').subscribe((res: any) => {
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
