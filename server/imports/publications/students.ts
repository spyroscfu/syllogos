import { Meteor } from 'meteor/meteor';

import { Students } from '../../../both/collections/students.collection';
import { Tmimata } from '../../../both/collections/tmimata.collection';

Meteor.publish('studentsAtClass', (tmimaId:string)=>{
    const tmima = Tmimata.findOne(tmimaId);

    if (!tmima){
        throw new Meteor.Error('404','Άγνωστο τμήμα.');
    }

    return Students.find({
        tmima: {
            $in:tmimaId
        }
    });
});