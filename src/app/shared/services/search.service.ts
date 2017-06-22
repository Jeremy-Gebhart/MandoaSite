import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

    searchData: string;

    setSearchData(data: string) {
        this.searchData = data;
    }

    getSearchData(): string {
        return this.searchData;
    }
}