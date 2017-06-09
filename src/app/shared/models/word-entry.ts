// This data object maps to the format of the JSON data files
export class WordEntry {
    constructor(
        public word: string,
        public pronunciation: string,
        public definition: string
    ) {}
}