import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
// ** app options
  arrayAppOpt: any = {
    planning: ['memorandum', 'calendar'],
    analysis: ['forumA', 'log'],
    design: 'design',
    develop: ['stack', 'repository', 'sprint', 'priority'],
    integration: 'integration',
    testing: ['binnacle', 'bugs', 'evidence', 'priority'],
    deployment: ['modeling', 'versioned', 'documentation'],
    maintenance: ['perfective', 'adaptative', 'corrective', 'record']
  };

  appOpt: string = '';

  constructor() {
    this.appOpt = '';
  }

  renderApp(res: any) {
    this.appOpt = res;
    console.log(this.arrayAppOpt);
  }

  ngOnInit(): void {
  }
}
