import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
bandLogDetail: boolean = false;

  constructor() { }

  showLogDetail() { this.bandLogDetail = true }

  closeLogDetail() { this.bandLogDetail = false }

  moreDetails(entrieID: number) {
    this.showLogDetail();
  }

  async load() {

  }

  ngOnInit(): void { }
}
