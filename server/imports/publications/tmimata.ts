import { Meteor } from 'meteor/meteor';

import { Tmimata } from '../../../both/collections/tmimata.collection';

interface Options {
    [key: string]: any;
}

Meteor.publish('tmima', function(tmimaId:string){
    return Tmimata.find(buildQuery.call(this, tmimaId))
})

Meteor.publish('tmimata', function (options:Options, tmimaName?:string) {
    return Tmimata.find(buildQuery.call(this, null,tmimaName), options);
})

function buildQuery(tmimaId?:sting, tmimaName?:string) {
    if (tmimaId){
        return {
            _id: tmimaId
        };
    }

    const searchRegEx = {'$regex': '.*' + (tmimaName || '') + '.*', '$options': 'i'};

    return {
        name: searchRegEx
    };
}