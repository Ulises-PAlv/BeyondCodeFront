import { BacklogsService } from 'src/app/services/nosql/backlogs.service';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

  constructor( private _sprint: BacklogsService, private _notifier: NotifierService ) { }

  public showNotification( type: string, message: string ): void {
		this._notifier.notify( type, message );
	}

  async load() {
    await this._sprint.getSprints().subscribe((res: any) => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.load();
  }
}
