import { Component, OnInit, HostBinding } from '@angular/core';
import { Language } from './language';
import { LANGUAGE_LIST } from './language-mock';
import { trigger, transition, query, style, stagger, animate, useAnimation } from '@angular/animations';
import { transAnimation } from '../animation';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.language_card',[
          useAnimation(transAnimation)
        ])
      ])
    ])
  ],
})
export class LanguageComponent implements OnInit {
  @HostBinding('@pageAnimations')
  languages: Language[] = LANGUAGE_LIST;
  constructor() { }

  ngOnInit() {
  }

}
