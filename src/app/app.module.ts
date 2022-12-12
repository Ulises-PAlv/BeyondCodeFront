import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { ProjectComponent } from './components/project/project.component';
import { Error404Component } from './components/shared/error404/error404.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MenubarComponent } from './components/shared/menubar/menubar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { AcademyComponent } from './components/academy/academy.component';
import { LoginComponent } from './components/login/login.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

import { MemorandumComponent } from './components/SDLC/Planning/memorandum/memorandum.component';
import { CalendarComponent } from './components/SDLC/Planning/calendar/calendar.component';
import { LogComponent } from './components/SDLC/Analysis/log/log.component';
import { COUComponent } from './components/SDLC/Modeling/cou/cou.component';
import { CDComponent } from './components/SDLC/Modeling/cd/cd.component';
import { DAComponent } from './components/SDLC/Modeling/da/da.component';
import { DOSComponent } from './components/SDLC/Modeling/dos/dos.component';
import { DOStateComponent } from './components/SDLC/Modeling/dostate/dostate.component';

import { ForumAComponent } from './components/SDLC/Analysis/forum-a/forum-a.component';
import { ForumIComponent } from './components/SDLC/Integration/forum-i/forum-i.component';
import { StackDesignComponent } from './components/SDLC/Develop/stack-design/stack-design.component';
import { RepositoryComponent } from './components/SDLC/Develop/repository/repository.component';
import { BinnacleComponent } from './components/SDLC/Testing/binnacle/binnacle.component';
import { BugsComponent } from './components/SDLC/Testing/bugs/bugs.component';
import { EvidenceComponent } from './components/SDLC/Testing/evidence/evidence.component';
import { PriorityFixComponent } from './components/SDLC/Testing/priority-fix/priority-fix.component';
import { DdComponent } from './components/SDLC/Deploymeny/dd/dd.component';
import { VersionedComponent } from './components/SDLC/Deploymeny/versioned/versioned.component';
import { DocumentationComponent } from './components/SDLC/Deploymeny/documentation/documentation.component';
import { PerfectiveComponent } from './components/SDLC/Maintenance/perfective/perfective.component';
import { AdaptativeComponent } from './components/SDLC/Maintenance/adaptative/adaptative.component';
import { CorrectiveComponent } from './components/SDLC/Maintenance/corrective/corrective.component';
import { RecordComponent } from './components/SDLC/Maintenance/record/record.component';
import { SprintComponent } from './components/SDLC/Develop/sprint/sprint.component';
import { BacklogComponent } from './components/SDLC/Develop/backlog/backlog.component';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { ManagementComponent } from './components/management/management.component';
import { NotificationsComponent } from './components/shared/notifications/notifications.component';
import { ProfileComponent } from './components/shared/profile/profile.component';

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 2
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ProjectComponent,
    Error404Component,
    FooterComponent,
    NavbarComponent,
    MenubarComponent,
    LoadingComponent,
    AcademyComponent,
    LoginComponent,
    AboutusComponent,
    MemorandumComponent,
    LogComponent,
    COUComponent,
    CDComponent,
    DAComponent,
    DOSComponent,
    DOStateComponent,
    ForumAComponent,
    ForumIComponent,
    StackDesignComponent,
    RepositoryComponent,
    BinnacleComponent,
    BugsComponent,
    EvidenceComponent,
    PriorityFixComponent,
    DdComponent,
    VersionedComponent,
    DocumentationComponent,
    PerfectiveComponent,
    AdaptativeComponent,
    CorrectiveComponent,
    RecordComponent,
    SprintComponent,
    BacklogComponent,
    ManagementComponent,
    NotificationsComponent,
    ProfileComponent,
    CalendarComponent
  ],
  imports: [ 
    FormsModule,  
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(ROUTES),
    NotifierModule.withConfig(customNotifierOptions),
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }