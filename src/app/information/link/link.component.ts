import { Component, OnInit } from '@angular/core';
import { Link } from './link';
import { LINKLIST } from './linkList-mock';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  links: Link[] = LINKLIST;
  constructor() { }

  ngOnInit() {
  }

}
