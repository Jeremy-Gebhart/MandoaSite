import { Component } from '@angular/core';
import { DataRetrievalService } from '../shared/services/data-retrieval.service';
import { Observable } from 'rxjs/Rx';

import { WordEntry } from '../shared/models/word-entry';

@Component({
    templateUrl: './lexicon.component.html',
    styleUrls: ['./lexicon.component.css']
})
export class LexiconComponent {
    entryArray: WordEntry[] = [];
    showTable: boolean = false;

    constructor(private dataSVC: DataRetrievalService) { }

    loadAVocab() {
        this.dataSVC.getWordList('a_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadBVocab() {
        this.dataSVC.getWordList('b_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadCVocab() {
        this.dataSVC.getWordList('c_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadDVocab() {
        this.dataSVC.getWordList('d_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadEVocab() {
        this.dataSVC.getWordList('e_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadGVocab() {
        this.dataSVC.getWordList('g_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadHVocab() {
        this.dataSVC.getWordList('h_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadIVocab() {
        this.dataSVC.getWordList('i_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadJVocab() {
        this.dataSVC.getWordList('j_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadKVocab() {
        this.dataSVC.getWordList('k_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadLVocab() {
        this.dataSVC.getWordList('l_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadMVocab() {
        this.dataSVC.getWordList('m_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadNVocab() {
        this.dataSVC.getWordList('n_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadOVocab() {
        this.dataSVC.getWordList('o_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadPVocab() {
        this.dataSVC.getWordList('p_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadRVocab() {
        this.dataSVC.getWordList('r_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadSVocab() {
        this.dataSVC.getWordList('s_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadTVocab() {
        this.dataSVC.getWordList('t_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadUVocab() {
        this.dataSVC.getWordList('u_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadVVocab() {
        this.dataSVC.getWordList('v_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadWVocab() {
        this.dataSVC.getWordList('w_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadYVocab() {
        this.dataSVC.getWordList('y_vocab', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadPhrasesVocab() {
        this.dataSVC.getWordList('phrases', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadNumbersVocab() {
        this.dataSVC.getWordList('numbers', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }

    loadPrepositionsHVocab() {
        this.dataSVC.getWordList('prepositions', 'mandoaSorted').subscribe(entries => {
            this.entryArray = entries['items'];
            console.log(this.entryArray);
        },
        err => {
            console.log(err);
        });
      this.showTable = true;
    }
}