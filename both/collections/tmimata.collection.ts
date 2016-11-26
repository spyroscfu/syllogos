import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Tmima } from '../models/tmima.model';

export const Tmimata = new MongoObservable.Collection<Tmima>('tmimata');

function loggedIn(){
    return !!Meteor.user();
}

Tmimata.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});