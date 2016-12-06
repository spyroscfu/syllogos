import { Component, ViewContainerRef } from '@angular/core';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { LoginComponent } from './auth/login.component';

import template from './app.component.html';
import templateLogin from './auth/login.component.html'
import style from './app.component.scss';

@Component({
  selector: 'app',
  template,
  styles : [style] 
})
@InjectUser('user')
export class AppComponent {
  dialogRef: MdDialogRef<any>;
  /*dialogConfig : MdDialogConfig = {
    disableClose: false,
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  }*/

  constructor(private loginDialog: MdDialog, private viewContainerRef: ViewContainerRef){}

  openLoginDialog(){
    let config = new MdDialogConfig;
    config.viewContainerRef = this.viewContainerRef;
    this.dialogRef = this.loginDialog.open(LoginComponent, config);
  }

  logout(){
    Meteor.logout();
  }
}

/*@Component({
  templateUrl : './auth/login.component.html'
})
export class LoginDialogContent{
  constructor(@Optional() public dialogRef: MdDialogRef<LoginDialogContent>){}
}*/