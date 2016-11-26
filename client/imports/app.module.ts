import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination'; 

import { AppComponent } from './app.component';
import { routes, ROUTE_PROVIDERS} from './app.routes';
import { TMIMATA_DECLARATIONS } from './tmimata';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes);
        Ng2PaginationModule
    ],
    declarations: [
        AppComponent,
        ...TMIMATA_DECLARATIONS
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule{}