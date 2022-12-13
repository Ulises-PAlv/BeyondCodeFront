import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-i',
  templateUrl: './forum-i.component.html',
  styleUrls: ['./forum-i.component.scss']
})
export class ForumIComponent implements OnInit {
  bandForumModal: boolean = false;
  bandFormCreate: boolean = false;

  constructor() { }

  closeCreateForm() { this.bandFormCreate = false }

  showCreateForm() { this.bandFormCreate = true }

  closeChat() { this.bandForumModal = false }
  
  showChat() { this.bandForumModal = true }

  async load() {

  }

  ngOnInit(): void {
  }
}
