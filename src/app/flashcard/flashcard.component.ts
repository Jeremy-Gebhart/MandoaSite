import { Component } from '@angular/core';

import { DataRetrievalService } from '../shared/services/data-retrieval.service';
import { WordEntry } from '../shared/models/word-entry';

@Component({
    templateUrl: './flashcard.component.html',
    styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent {

    // Word resource variables
    wordList: WordEntry[] = [];
    currentWord: WordEntry = null;
    currentIndex: number = 0;

    // UI Control variables
    showFlashCard: boolean = false;
    showLetterPicker: boolean = true;
    showOutOfLettersMessage: boolean = false;

    constructor(private dataSvc: DataRetrievalService) {}

    getFlashCardList(letterListToPull: string) {

        if (letterListToPull.length === 1) {
            let listName: string = letterListToPull + '_vocab';

            this.dataSvc.getWordList(listName, 'mandoaSorted').subscribe(entries => {
                this.wordList = entries['items'];
                console.log(this.wordList);
                this.setNextFlashcard();
                this.toggleFlashCardOn();
            },
            err => {
                console.log(err);
            });
        }
    }

    setNextFlashcard() {
        
        if (this.wordList != []) {
            this.currentWord = this.wordList[this.currentIndex];

            // Make sure it's not going to go past the end of the array
            if (this.currentIndex < this.wordList.length) {
                this.currentIndex += 1;
            } else {
                this.currentIndex = 0;
                this.toggleOutOfWordsMessage();
            }
        } else {
            console.log('WordList is empty. Defaulting to "a".');
            this.getFlashCardList('a');
        }
    }

    private toggleLetterPickerOn() {
        this.showLetterPicker = true;
        this.showFlashCard = false;
        this.showOutOfLettersMessage = false;
    }

    private toggleFlashCardOn() {
        this.showFlashCard = true;
        this.showLetterPicker = false;
        this.showOutOfLettersMessage = false;
    }

    private toggleOutOfWordsMessage() {
        if (this.showOutOfLettersMessage === true) {
            this.showOutOfLettersMessage = false;
        } else {
            this.showOutOfLettersMessage = true;
        }
    }
}