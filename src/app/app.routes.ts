import { Routes } from '@angular/router';

// ?? Components #############################################################################
    import { HomeComponent } from './components/home/home.component';
    import { AcademyComponent } from './components/academy/academy.component';
    import { LoginComponent } from './components/login/login.component';
    import { AboutusComponent } from './components/aboutus/aboutus.component';

    // ** Common
    import { Error404Component } from './components/shared/error404/error404.component';

// ?? Array path's ############################################################################
    export const ROUTES : Routes = [
        { path: 'login', component: LoginComponent },
        { path: 'home', component: HomeComponent },
        { path: 'aboutus', component: AboutusComponent },
        { path: 'academy', component: AcademyComponent },
        { path: '', pathMatch: 'full', redirectTo: 'login' },
        { path: '**', pathMatch: 'full', component: Error404Component }
    ];