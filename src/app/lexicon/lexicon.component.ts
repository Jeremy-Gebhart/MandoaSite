import { Component } from '@angular/core';
import { DataRetrievalService } from '../shared/services/data-retrieval.service';

import { WordEntry } from '../shared/models/word-entry';

@Component({
    templateUrl: './lexicon.component.html',
    styleUrls: [
        './lexicon.component.css',
        '../shared/styles/mandoa-font-face.css'
    ]
})
export class LexiconComponent {
    entryArray: WordEntry[];

    constructor(private dataSVC: DataRetrievalService) {}

    loadAVocab() {
        console.log('loading word list');
        //this.entryArray = this.dataSVC.getWordList('a_vocab'); 
        this.entryArray = [{ // Test Data
            "word": "a, a', al",
            "pronunciation": "[Ah]",
            "definition": "but (often al before a vowel)"
      }];
    }


}