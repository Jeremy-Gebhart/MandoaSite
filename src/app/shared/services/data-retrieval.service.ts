import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers , Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { WordEntry } from '../models/word-entry';

let $ = require('jquery');

@Injectable()
export class DataRetrievalService {
    entryList: WordEntry[] = [];
    baseUrl: string = 'http://localhost:8080/data/';

    constructor(private http: Http) {}

    // Retrieve the JSON vocab list and return it as a model array. 
    // listToGet must be the name of the JSON file minus the extension
    getWordList(listToGet: string, subFolder: string): Observable<WordEntry[]> {
        let fullUrl: string = this.baseUrl + subFolder + '/' + listToGet + '.json';

        return this.http.get(fullUrl)
                        .map((res: Response) => res.json())
                        .catch((error: any) => Observable.throw(error.json || 'Server Error'));
    }
}