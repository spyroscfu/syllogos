import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { TmimataListComponent } from './tmimata/tmimata-list.component';
import { TmimaDetailsComponent } from './tmimata/tmima-details.component';

export const routes: Route[] = [
    { path: '', component: TmimataListComponent },
    { path: 'tmima/:tmimaId', component: TmimaDetailsComponent, canActivate: ['canActivateForLoggedIn'] }
];

export const ROUTES_PROVIDERS = [{
    provide: 'canActivateForLoggedIn',
    useValue: ()=> !!Meteor.userId()
}];