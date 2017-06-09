import { Injectable } from '@angular/core';

import { WordEntry } from '..//models/word-entry';

let $ = require('jquery');

@Injectable()
export class DataRetrievalService {
    entryList: WordEntry[] = [];

    // Retrieve the JSON vocab list and return it as a model array. 
    // listToGet must be the name of the JSON file minus the extension
    getWordList(listToGet: string): WordEntry[] {
        let fileName: string = listToGet + '.json';

        $.ajax({
            url: 'http://localhost:8080/data/vocab/' + fileName,
            type: 'GET',
            dataType: 'json',
            error: function(data: any) {
                console.log('File: ' + fileName + ' not found. No data returned.');
            },
            success: function(data: any) {
              data.array.forEach(function(element: any) {
                  this.entryList.push(this.jsonToWordEntry(element));
              });
            }
        });

        return this.entryList;
    }

    // Parse the JSON entry out to the WordEntry model
    private jsonToWordEntry(jsonData: string): WordEntry {        
        let parsedData: any[] = JSON.parse(jsonData);
        let word: string = '';
        let pronunciation: string = '';
        let definition: string = '';

        if (parsedData) {
            word = parsedData[0].word;
            pronunciation = parsedData[0].pronunciation;
            definition = parsedData[0].definition;
        }

        let newModel: WordEntry = new WordEntry(word, pronunciation, definition);
        return newModel;
    }

}