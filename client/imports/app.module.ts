import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import { MaterialModule, MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { routes/*, ROUTES_PROVIDERS*/} from './app.routes';
import { LoginComponent } from './auth/login.component';
import { TMIMATA_DECLARATIONS } from './tmimata';
import { AUTH_DECLARATIONS } from './auth';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        MdDialogModule.forRoot(),
        Ng2PaginationModule,
        MaterialModule
    ],
    declarations: [
        AppComponent,
        //LoginDialogContent,
        ...TMIMATA_DECLARATIONS,
        ...AUTH_DECLARATIONS
    ],
    entryComponents: [
        LoginComponent
    ],
    /*providers: [
        ...ROUTES_PROVIDERS
    ],*/
    bootstrap: [
        AppComponent
    ]
})
export class AppModule{}