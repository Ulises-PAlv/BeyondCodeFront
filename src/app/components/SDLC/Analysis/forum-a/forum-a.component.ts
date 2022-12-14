import { IForumGet, IForumPost, IEntriesGet, IEntriesPost } from 'src/app/interfaces/forum.interface';
import { ForumService } from 'src/app/services/nosql/forums.service';
import { UsersService } from 'src/app/services/sql/users.service';
import { LsHelper } from 'src/app/helpers/localstorage.helper';
import { DateHelper } from 'src/app/helpers/dateJS.helper';
import { NotifierService } from 'angular-notifier';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-a',
  templateUrl: './forum-a.component.html',
  styleUrls: ['./forum-a.component.scss']
})
export class ForumAComponent implements OnInit {
  bandForumModal: boolean = false;
  bandFormCreate: boolean = false;
  prs: any;
  user: any;
  
  forums: any[] = [];
  auxEntries: any[] = [];
  idChat: string= '';

  constructor( private _forum: ForumService, private _notifier: NotifierService, private _user: UsersService ) { }

  closeCreateForm() { this.bandFormCreate = false }

  showCreateForm() { this.bandFormCreate = true }

  closeChat() { this.bandForumModal = false }

  async addEntry(message: string) {
    let objEntry: IEntriesPost = {
      entryID: 2,
      message: message,
      entryDate: DateHelper.formatDate(new Date()),
      entryCreator: this.user.id,
      evidence: '',
      id: this.idChat
    };

    await this._forum.postEntry(objEntry);
    this.bandForumModal = false;
    this.load();
    this.reloadEntries(this.idChat);
  }

  reloadEntries(id: any) {
    this.auxEntries = [];
    this.forums.forEach((forum: any) => {
      console.log(id)
      if(id == forum._id) {
        console.log(forum.entries)
        this.auxEntries = forum.entries;
      }
    });

    this.assignUserEntries();
  }

  createForum(topic: string) {
    let objForum: IForumPost = {
      topic: topic,
      date: DateHelper.formatDate(new Date()),
      creator: this.user.id,
      type: 'A',
      entries: []
    };

    this._forum.postForum(objForum);
    this.showNotification('success', 'Foro creado');
    this.load();
  }
  
  async showChat(id: any) {
    this.idChat = id;
    this.forums.forEach((forum: any) => {
      if(id == forum._id) {
        console.log(forum.entries)
        this.auxEntries = forum.entries;
      }
    });

    this.assignUserEntries();
    this.bandForumModal = true;
  }

  assignUserEntries() {
    this.auxEntries.forEach((entry: any) => {
      this._user.getUserById(entry.entryCreator).subscribe((res: any) => {
        entry.user = res;
      });
    });
  }

  assignUserForums() {
    this.forums.forEach((entry: any) => {
      this._user.getUserById(entry.creator).subscribe((res: any) => {
        entry.user = res;
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
  }

  async load() {
    this.forums = [];
    await this._forum.getForum().subscribe((data: any) => {
      this.clean(data);
    });
  }

  public showNotification( type: string, message: string ): void {
		this._notifier.notify( type, message );
	}

  ngOnInit(): void {
    this.user = LsHelper.getItem('user');
    this.prs = LsHelper.getItem('prs');
    this.load();
  }
}
