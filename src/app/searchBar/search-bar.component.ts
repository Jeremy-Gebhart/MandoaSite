import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from '../shared/services/search.service';

@Component({
    selector: 'search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchbarComponent {

    langSelect: string = 'english'; // Default search language

    searchTerm: string;

    constructor(private router: Router, private searchSvc: SearchService) {}

    searchForTerm() {
        let data: string = this.searchTerm + '_' + this.langSelect

        this.searchSvc.setSearchData(data);
        this.router.navigate(['/search']);
    }
}