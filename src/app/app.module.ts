import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './start/app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent} from './error/error.component';
import { NavComponent } from './shared/navbar/navbar.component';
import { AppRoutingModule } from './shared/app.routing';
import { SearchModule } from './search/search.module';

import { WordEntry } from './shared/models/word-entry';
import { LexiconComponent } from './lexicon/lexicon.component';
import { DataRetrievalService } from './shared/services/data-retrieval.service';
import { TruncatePipe } from './shared/pipes/trunc.pipe';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        SearchModule,
        HttpModule,
        JsonpModule
    ],
    exports: [
        TruncatePipe
    ],
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        ErrorComponent,
        LexiconComponent,
        TruncatePipe
    ],
    providers: [
        DataRetrievalService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}