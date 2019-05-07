import { Component, OnInit } from '@angular/core';
import { Language } from './language';
import { LANGUAGE_LIST } from './language-mock';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  languages: Language[] = LANGUAGE_LIST;
  constructor() { }

  ngOnInit() {
  }

}
