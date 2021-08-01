import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from "rxjs/operators";
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  outputText: any ;
  textarea: FormControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    this.textarea.valueChanges.pipe(
      debounceTime(1500),
    ).subscribe((value) => {
      this.outputText = this.countWords(value);
    })
  }

  /**
   * get words count for a given string
   * @param {string} value
   * @return {Map} wordsCount
   */
  countWords(value: string) {
    const wordCounts = new Map();
    let words =value.match(/(\w+)/g);
    words ? words.forEach(word => {
      if (word.length){
        const currentWordCount = wordCounts.get(word) || 0
        wordCounts.set(word, currentWordCount+1)
      }
    }) : '';
    return wordCounts;
  }
  /**
   * comparer function to sort the items according to the value.
   */
  valueDescOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.value > b.value ? -1 : (b.value > a.value ? 1 : 0);
  }
}
