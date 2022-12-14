import { Component, OnInit } from '@angular/core';
import { IForumGet, IForumPost, IEntriesGet, IEntriesPost } from 'src/app/interfaces/forum.interface';
import { ForumService } from 'src/app/services/nosql/forums.service';
import { UsersService } from 'src/app/services/sql/users.service';
import { LsHelper } from 'src/app/helpers/localstorage.helper';
import { DateHelper } from 'src/app/helpers/dateJS.helper';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  coincidences: IEntriesGet[] = [];
  bandLogDetail: boolean = false;
  forums: any[] = [];
  detail: any;

  constructor(private _forum: ForumService, private _notifier: NotifierService, private _user: UsersService) { }

  showLogDetail() { this.bandLogDetail = true }

  getLog(search: string) {
    this.coincidences = [];
    this.forums.forEach((forum: any) => {
      forum.entries.forEach((entry: any) => {
        if(entry.message.toLocaleLowerCase().includes(search.toLowerCase())) {
          this.coincidences.push(entry);
        }
      });
    });
  }

  closeLogDetail() {
    this.detail = {};
    this.bandLogDetail = false;
  }

  moreDetails(entry: any) {
    this.detail = entry;
    this.showLogDetail();
  }

  assignUserEntries(forum: any) {
    forum.entries.forEach((entry: any) => {
      this._user.getUserById(entry.entryCreator).subscribe((res: any) => {
        entry.user = res;
      });
    });
  }

  assignUserForums() {
    this.forums.forEach((forum: any) => {
      this._user.getUserById(forum.creator).subscribe((res: any) => {
        forum.user = res;
        this.assignUserEntries(forum);
      });
    });
  }

  clean(data: any) {
    data.forEach((forum: any) => {
      if(forum.type == 'A') {
        this.forums.push(forum);
      }
    });

    this.assignUserForums();
    console.log(this.forums)
  }

  async load() {
    this.forums = [];
    await this._forum.getForum().subscribe((data: any) => {
      this.clean(data);
    });
  }

  ngOnInit(): void {
    this.load();
  }
}
