import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { Ng2PaginationModule } from 'ng2-pagination';

import { AppComponent } from './app.component';
import { routes, ROUTES_PROVIDERS } from './app.routes';
//import { TMIMATA_DECLARATIONS } from './tmimata';
//import { SHARED_DECLARATIONS } from './shared';
import { MaterialModule } from "@angular/material";
//import { AUTH_DECLARATIONS } from "./auth/index";

@NgModule({
    imports: [
        BrowserModule
        , FormsModule
        , ReactiveFormsModule
        , RouterModule.forRoot(routes)
        , AccountsModule
        , MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent
        //, ...TMIMATA_DECLARATIONS
        //, ...SHARED_DECLARATIONS
        //, ...AUTH_DECLARATIONS
    ],
    /*providers: [
        ...ROUTES_PROVIDERS
    ],*/
    bootstrap: [
        AppComponent
    ]
})
export class AppModule{}