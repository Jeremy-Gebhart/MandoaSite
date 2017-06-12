import { Component } from '@angular/core';
import { DataRetrievalService } from '../shared/services/data-retrieval.service';
import { Observable } from 'rxjs/Rx';

import { WordEntry } from '../shared/models/word-entry';

@Component({
    templateUrl: './lexicon.component.html',
    styleUrls: [
        './lexicon.component.css',
        '../shared/styles/mandoa-font-face.css'
    ]
})
export class LexiconComponent {
    entryArray: WordEntry[] = [];
    showTable: boolean = false;

    constructor(private dataSVC: DataRetrievalService) { }

    loadAVocab() {
        this.dataSVC.getWordList('a_vocab', 'vocab').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        }); 
      this.showTable = true;
    }


}