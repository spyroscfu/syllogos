import { Component, OnInit, NgZone, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meteor } from 'meteor/meteor';
import { MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
//import { Accounts } from 'meteor/accounts-base';

import template from './login.component.html';
import style from './login.component.scss';

@Component({
    selector: 'login',
    template,
    styles: [style]
})
export class LoginComponent implements OnInit{
    errMessage: string;
    loginForm: FormGroup;
    constructor(
        private router:Router
        , private zone:NgZone
        , private formBuilder: FormBuilder
        , public dialogRef: MdDialogRef<any>
    ){}

    ngOnInit(){
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.errMessage = '';
    }

    login(){
        if (this.loginForm.valid){
            Meteor.loginWithPassword(
                this.loginForm.value.email,
                this.loginForm.value.password,
                (err)=>{
                    if (err){
                        this.zone.run(()=>{
                            this.errMessage = err;
                        });
                    }else{
                        this.router.navigate( ['/'] );
                    }
                }
            );
        }
    }
}