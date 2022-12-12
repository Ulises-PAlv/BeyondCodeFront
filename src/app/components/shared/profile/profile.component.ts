import { Component, OnInit } from '@angular/core';
import { LsHelper } from 'src/app/helpers/localstorage.helper';
import { ProjectsService } from 'src/app/services/sql/projects.service';
import { TeamsService } from 'src/app/services/sql/teams.service';
import { NotifierService } from 'angular-notifier';
import { ITeam } from 'src/app/interfaces/team.interface';
import { IProject } from 'src/app/interfaces/project.interface';
import { EncryptHelper } from 'src/app/helpers/encryptJS.helper';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  user: any;
  renderedProject: any;
  userTeams:any[] = [];
  bandProjectSelected: boolean = false;

  constructor( private _teams: TeamsService, private _projects: ProjectsService, private _notifier: NotifierService ) { }

  workspaceSelected() {
    LsHelper.projectSelected(this.renderedProject);
    this.showNotification('success', 'Project selected succesfully!');
  }

  showProjectDetails(position: number) {
    this.bandProjectSelected = true;
    this.renderedProject = this.userTeams[position];
  }

  getUserData() {
    this.user = LsHelper.getItem('user');
  }

  addProjectData(team: any): void {
    this._projects.getProjectById(team.project_id.toString()).subscribe((res: any) => {
      team.project_name = res[0].name;
      res[0].forgemaster == this.user.id ? team.isForgeMaster = true : team.isForgeMaster = false;
      team.description = res[0].description;
      team.date = res[0].init_date;

      this.userTeams.push(team);
    });
  }
  
  async load() {
    this.getUserData();
    this._teams.getTeamByUser(this.user?.id).subscribe((data: any) => {
      console.log(data)
      data.forEach(async (team: any) => {
        if(team.user_id == this.user.id) {
          await this.addProjectData(team);
          console.log(this.userTeams)
        }
      });
    });
  }

  public showNotification( type: string, message: string ): void {
		this._notifier.notify( type, message );
	}

  ngOnInit(): void {
    this.load();
  }
}
