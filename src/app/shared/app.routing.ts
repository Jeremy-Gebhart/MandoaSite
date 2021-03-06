import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';
import { LexiconComponent } from '../lexicon/lexicon.component';
import { SearchResultsComponent } from '../searchResults/search-results.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'lexicon', component: LexiconComponent },
            { path: 'search', component: SearchResultsComponent },
            { path: '**', component: ErrorComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}