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
    wordList: WordEntry[] = [];
    searchResults: WordEntry[] = [];
    showTable: boolean = false;
    showError: boolean = false;

    constructor(private dataSvc: DataRetrievalService, private searchSvc: SearchService) {
        // This should trigger anytime the searchbar is submitted
        this.searchSvc.getSearchData().subscribe(searchData => {
            
            // Don't even bother searching for an empty string
            if (searchData != '') {
                let parts = searchData.split('_', 2);

                // Clear the searchResults, otherwise it just appends to the list with each search
                this.searchResults = [];

                this.searchForWord(parts[0], parts[1]);
            }
        });
    }

    searchForWord(searchWord: string, lang: string) {

        let letterToSearch = searchWord[0].trim().toLowerCase(); // Get the first letter

        // fileName will work for both Mando'a and English searches
        let fileName: string = '';
        switch (letterToSearch) {
            case 'a':
                fileName = 'a_vocab';
                break;
            case 'b':
                fileName = 'b_vocab';
                break;
            case 'c':
                fileName = 'c_vocab';
                break;
            case 'd':
                fileName = 'd_vocab';
                break;
            case 'e':
                fileName = 'e_vocab';
                break;
            case 'f':
                fileName = 'f_vocab';
                break;
            case 'g':
                fileName = 'g_vocab';
                break;
            case 'h':
                fileName = 'h_vocab';
                break;
            case 'i':
                fileName = 'i_vocab';
                break;
            case 'j':
                fileName = 'j_vocab';
                break;
            case 'k':
                fileName = 'k_vocab';
                break;
            case 'l':
                fileName = 'l_vocab';
                break;
            case 'm':
                fileName = 'm_vocab';
                break;
            case 'n':
                fileName = 'n_vocab';
                break;
            case 'o':
                fileName = 'o_vocab';
                break;
            case 'p':
                fileName = 'p_vocab';
                break;
            case 'q':
                fileName = 'q_vocab';
                break;
            case 'r':
                fileName = 'r_vocab';
                break;
            case 's':
                fileName = 's_vocab';
                break;
            case 't':
                fileName = 't_vocab';
                break;
            case 'u':
                fileName = 'u_vocab';
                break;
            case 'v':
                fileName = 'v_vocab';
                break;
            case 'w':
                fileName = 'w_vocab';
                break;
            case 'x':
                fileName = 'x_vocab';
                break;
            case 'y':
                fileName = 'y_vocab';
                break;
            case 'z':
                fileName = 'z_vocab';
                break;
        }

        let lookupFolder: string = '';
        if (lang.trim().toLowerCase() === 'mandoa') {
            lookupFolder = 'mandoaSorted'
        } else {
            lookupFolder = 'englishSorted'
        }

        // Get and filter the data
        this.dataSvc.getWordList(fileName, lookupFolder).subscribe(entries => {
            this.wordList = entries['items'];
            console.log(entries);

            // Add only the entries that contain the search word
            for (let entry of this.wordList) {
                if (lookupFolder.includes('english')) {
                    if (entry.definition.toLowerCase().includes(searchWord)) {
                        this.searchResults.push(entry);
                    }
                } else {
                    if (entry.word.toLowerCase().includes(searchWord)) {
                        this.searchResults.push(entry);
                    }
                }
            }

            // Update the View
            if (this.searchResults.length > 0) {
                // Show the table
                this.showTable = true;
                this.showError = false;
            } else {
                // No matches were found
                this.showError = true;
                this.showTable = false;
            }
        },
        err => {
            console.log('An error has occurred');
            console.log(err);
        });
    }
}