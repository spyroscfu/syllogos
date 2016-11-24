import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { TmimataListComponent } from './tmimata/tmimata-list.component';

export const routes: Route[] = [
    {path: '', component: TmimataListComponent}
];