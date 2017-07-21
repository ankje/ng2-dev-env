import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail.component';

import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import {AppComponent}  from './app.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import {HeroSearchComponent} from "./hero-search.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}