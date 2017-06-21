import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SearchbarComponent } from './searchBar/search-bar.component';
import { SearchComponent } from './searchComponent/search.component';
import { SearchResultsComponent } from './searchResults/search-results.component';
import { DataRetrievalService } from '../shared/services/data-retrieval.service';

const SearchRoutes: Routes = [
    {
        path: 'search',
        component: SearchComponent,
        children: [
            { path: 'results', component: SearchResultsComponent }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(SearchRoutes)
    ],
    exports: [
        RouterModule,
        SearchbarComponent
    ],
    declarations: [
        SearchComponent,
        SearchbarComponent,
        SearchResultsComponent
    ],
    providers: [
        DataRetrievalService
    ]
})
export class SearchModule {}