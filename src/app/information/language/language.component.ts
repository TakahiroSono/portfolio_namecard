import { Component, OnInit, HostBinding } from '@angular/core';
import { Language } from './language';
import { LANGUAGE_LIST } from './language-mock';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.language_card',[
          style({opacity: 0, transform: 'translateX(100px)'}),
          stagger(-30, [
            animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'none'}))
          ])
        ])
      ])
    ]),
  ]
})
export class LanguageComponent implements OnInit {
  @HostBinding('@pageAnimations')
  // public animatePage = true;
  languages: Language[] = LANGUAGE_LIST;
  constructor() { }

  ngOnInit() {
  }

}
