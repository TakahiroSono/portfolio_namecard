import { animation, animate, style, stagger } from '@angular/animations';

  export const transAnimation = animation([
    style({opacity: 0, transform: 'translateX(100px)'}),
    stagger(-30, [
        animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'none'}))
    ])
  ]);