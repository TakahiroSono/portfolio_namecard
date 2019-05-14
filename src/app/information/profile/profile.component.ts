import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, useAnimation, query } from '@angular/animations';
import { transAnimation } from '../animation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations:[
    trigger('pageAnimations',[
      transition(':enter',[
        query('.history, .favorite',[
          useAnimation(transAnimation)
        ])
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;
  constructor() { }

  ngOnInit() {
  }

}
