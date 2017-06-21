import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    selector: 'search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchbarComponent {

    langSelect: string = 'english'; // Default search language

    searchTerm: string;

    constructor(private router: Router) {}

    searchForTerm() {
        let data: string = this.searchTerm + '_' + this.langSelect

        this.router.navigate(['/results', {searchData: data}]);
    }
}