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
  selectedBtn: Button;
  constructor() { }

  ngOnInit() {
    this.getInitilizeBtn()
  }

  onSelect(btn: Button): void{
    this.selectedBtn = btn;
  }

  getInitilizeBtn(){
    this.selectedBtn = this.btn_list.find((btn) => {
      return (btn.name === window.location.pathname.slice(1))
    })
  }
}
