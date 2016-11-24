import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tmimata } from '../../../both/collections/tmimata.collection';
import { InjectUser } from "angular2-meteor-accounts-ui";

import template from './tmimata-form.component.html';
import style from './tmimata-form.component.scss';

@Component({
    selector: 'tmimata-form',
    template,
    styles : [style] 
})
@InjectUser('user')
export class TmimataFormComponent implements OnInit{
    addForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ){}

    ngOnInit(){
        this.addForm = this.formBuilder.group({
            name: ['', Validators.required]
        });
    }

    addTmima():void{
        if (!Meteor.userId()){
            alert('Συνδεθείτε πρώτα για να προσθέσετε τμήμα.');
            return;
        }

        if (this.addForm.valid) {
            Tmimata.insert({
                name: this.addForm.value.name,
                addedBy: Meteor.userId(),
                addedAt: new Date() //TODO: better implementation...
            });
            this.addForm.reset();
        }
    }
}