import { Routes } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { TmimataListComponent } from './tmimata/tmimata-list.component';
//import { TmimaDetailsComponent } from './tmimata/tmima-details.component';
//import { SignupComponent } from './auth/signup.component';
//import { LoginComponent } from './auth/login.component';

export const routes: Routes = [
    { path: '', component: TmimataListComponent }
    //, { path: 'login', component: LoginComponent }
    //{ path: '', component: TmimataListComponent },
    //{ path: 'tmima/:tmimaId', component: TmimaDetailsComponent, canActivate: ['canActivateForLoggedIn'] }
];

/*export const ROUTES_PROVIDERS = [{
    provide: 'canActivateForLoggedIn',
    useValue: ()=> !!Meteor.userId()
}];*/