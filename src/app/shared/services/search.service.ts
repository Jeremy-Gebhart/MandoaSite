import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SearchService {

    private _searchData = new BehaviorSubject<string>(''); // Initialize with emtpy string

    setSearchData(data: string) {
        // Fire the update event with the new data
        this._searchData.next(data);
    }

    getSearchData(): Observable<string>  {
        return this._searchData.asObservable();
    }
}