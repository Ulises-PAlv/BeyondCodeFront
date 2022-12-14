import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { LsHelper } from 'src/app/helpers/localstorage.helper';
import { DateHelper } from 'src/app/helpers/dateJS.helper';
import { BacklogService } from 'src/app/services/nosql/backlog.service';
import { IBacklogGet, IBacklogPost, ISprintGet, ISprintPost } from 'src/app/interfaces/backlog.interface';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})

export class SprintComponent implements OnInit {
  prs: any;
  sprints: ISprintGet[] = [];
  currentSprint: any;

  constructor( private _notifier: NotifierService, private _backlog: BacklogService ) { }

  addBacklog(title:string, description: string, note: string, priority: any) {
    let obj: IBacklogPost = {
      title: title,
      priority: priority,
      description: description,
      note: note,
      status: "In progress",
      id: this.currentSprint._id
    };

    this._backlog.postBacklog(obj);
    this.load();
    this.showNotification('info', 'Agregado');
  }

  createSprint() {
    let obj: ISprintPost = {
      ProjectID: this.prs.project_id,
      date: DateHelper.formatDate(new Date()),
      type: 'Sprint',
      sprintNumber: this.sprints.length + 1,
      backlog: []
    };
    
    this._backlog.postSprint(obj);
    this.load();
    this.showNotification('success', 'Sprint creado');
  }

  getCurrentSprint(sprints: any) {
    this.currentSprint = sprints[sprints.length - 1];
  }

  clean(data: any) {
    let aux: ISprintGet[] = [];

    data.forEach((sprint: ISprintGet) => {
      if(sprint.ProjectID == this.prs.project_id) {
        aux.push(sprint);
      }
    });

    this.getCurrentSprint(aux);
    return aux;
  }

  async load() {
    this.sprints = [];
    await this._backlog.getSprints().subscribe((data: any) => {
      this.sprints = this.clean(data);
      console.log(this.sprints)
    });
  }

  public showNotification( type: string, message: string ): void {
		this._notifier.notify( type, message );
	}

  ngOnInit(): void {
    this.prs = LsHelper.getItem('prs');
    this.load();
  }
}
