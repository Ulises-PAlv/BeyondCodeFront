import { Component, OnInit } from '@angular/core';
import { LsHelper } from 'src/app/helpers/localstorage.helper';
import { IUserGet } from 'src/app/interfaces/user.interface';
import { TeamsService } from 'src/app/services/sql/teams.service';
import { UsersService } from 'src/app/services/sql/users.service';
import { NotifierService } from 'angular-notifier';
import { ITeam } from 'src/app/interfaces/team.interface';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})

export class ManagementComponent implements OnInit {
  collaborators: IUserGet[] = [];
  allUsers: IUserGet[] = [];
  projectSelected: any;
  bandUsersModal: boolean = false;

  constructor( private _users: UsersService, private _teams: TeamsService, private _notifier: NotifierService ) { }

  public showNotification( type: string, message: string ): void {
		this._notifier.notify( type, message );
	}

  showUsersModal() {
    this.getAllUsers();
    console.log(this.allUsers)
    this.bandUsersModal = true;
  }

  removeUsersModal() {
    this.bandUsersModal = false;
  }

  addUserToProject(id: number, role: number) {
    let objMember: ITeam = {
      project_id: this.projectSelected.project_id,
      user_id: id,
      role: role
    };
    this._teams.postMember(objMember);
    this.showNotification('success', 'Se agrego correctamente al proyecto');
    this.load();
    console.log(this.collaborators);
  }

  async getAllUsers() {
    await this._users.getUsers().subscribe((res: any) => {
      this.allUsers = res;
    });
  }

  cleanColabs() {
    this.collaborators = [];
  }

  async load() {
    if (this.projectSelected == null)this.projectSelected = LsHelper.getItem('prs');
    this.cleanColabs();
    
    await this._teams.getTeamById(this.projectSelected.project_id).subscribe((res: any) => {
      res.forEach(async (teamColab: any) => {
        await this._users.getUserById(teamColab.user_id).subscribe((data: any) => {
          this.collaborators.push(data[0]);
        });
      });
    });
  }

  ngOnInit(): void {
    this.load();
    console.log(this.collaborators);
  }
}
