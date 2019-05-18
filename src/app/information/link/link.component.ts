import { Component, OnInit, HostBinding } from '@angular/core';
import { Link } from './link';
import { LINKLIST } from './linkList-mock';
import { trigger, transition, query, useAnimation } from '@angular/animations';
import { transAnimation } from '../animation';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter',[
        query('.link_list-item',[
          useAnimation(transAnimation)
        ])
      ])
    ])
  ]
})
export class LinkComponent implements OnInit {
  @HostBinding('@pageAnimations')
  links: Link[] = LINKLIST;
  constructor() { }

  ngOnInit() {
  }

}
