import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { WordEntry } from '../shared/models/word-entry';
import { DataRetrievalService } from '../shared/services/data-retrieval.service';
import { SearchService } from '../shared/services/search.service';

@Component({
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
   searchData: string; // Two parameters separated by '_'. search term is on the left and the language on the right

    constructor(private dataSvc: DataRetrievalService, private searchSvc: SearchService) {
        this.searchData = searchSvc.getSearchData();
        console.log(this.searchData);
    }
}