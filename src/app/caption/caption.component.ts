import { Component, OnInit } from '@angular/core';
import { Button } from '../caption/nav/button';

@Component({
  selector: 'app-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.scss']
})
export class CaptionComponent implements OnInit {
  btn_list: Button[] = [
    {name: "profile", url: ""},
    {name: "language", url: ""},
    {name: "link", url: ""},
  ]
  constructor() { }

  ngOnInit() {
  }

}
