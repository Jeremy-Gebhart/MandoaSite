import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './start/app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent} from './error/error.component';
import { NavComponent } from './shared/navbar/navbar.component';
import { AppRoutingModule } from './shared/app.routing';
import { SearchbarComponent } from './searchBar/search-bar.component';
import { SearchResultsComponent } from './searchResults/search-results.component';
import { FooterComponent } from './shared/footer/footer.component';

import { WordEntry } from './shared/models/word-entry';
import { LexiconComponent } from './lexicon/lexicon.component';
import { DataRetrievalService } from './shared/services/data-retrieval.service';
import { SearchService } from './shared/services/search.service';
import { TruncatePipe } from './shared/pipes/trunc.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
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
        TruncatePipe,
        SearchbarComponent,
        SearchResultsComponent,
        FooterComponent
    ],
    providers: [
        DataRetrievalService,
        SearchService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}