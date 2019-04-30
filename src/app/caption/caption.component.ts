import { Component, OnInit } from '@angular/core';
import { Button } from './button';
import { BTNS } from './profile-list-mock';

@Component({
  selector: 'app-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.scss']
})
export class CaptionComponent implements OnInit {
  btn_list: Button[] = BTNS;
  selectedBtn: Button = this.btn_list[0];
  constructor() { }

  ngOnInit() {
  }

  onSelect(btn: Button): void{
    this.selectedBtn = btn;
  }
}
