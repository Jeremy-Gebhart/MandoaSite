import { Component } from '@angular/core';

import { DataRetrievalService } from '../../shared/services/data-retrieval.service';

@Component({
    selector: 'search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchbarComponent {

    // Properties
    _searchWord: string;
    get searchWord(): string {
        return this._searchWord;
    }

    set searchWord(value: string) {
        this._searchWord = value;
    }

    _langSwitch: string;

    get langSwitch(): string {
        return this._langSwitch;
    }

    set langSwitch(value: string) {
        if (value === 'mandoa' || value === 'english') {
            this._langSwitch = value;
        }
    }


    // Methods
    constructor(private dataSVC: DataRetrievalService) {}

    
}