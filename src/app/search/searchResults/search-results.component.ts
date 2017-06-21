import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { WordEntry } from '../../shared/models/word-entry';
import { DataRetrievalService } from '../../shared/services/data-retrieval.service';

@Component({
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
   searchData: string; // Two parameters separated by '_'. search term is on the left and the language on the right


    constructor(private dataSvc: DataRetrievalService, private route: ActivatedRoute) {}

    ngOnInit() {
        console.log('starting!');
        // this.searchData = this.route.snapshot.params['searchData'];
        
        

        this.route.params.subscribe((params: Params) => {
            this.searchData = params['searchData'];
            console.log(this.searchData);
        });
    }
}