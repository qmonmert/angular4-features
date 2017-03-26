import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-component5',
  templateUrl: './component5.component.html',
  animations: [
    trigger('updateBgColor', [
      state('blue', style({
        backgroundColor: 'blue'
      })),
      state('white', style({
        backgroundColor: 'white'
      })),
      transition('blue => white', animate(300)),
      transition('white => blue', animate(300))
    ])
  ]
})
export class Component5Component implements OnInit {

  color: any;

  ngOnInit() {
    this.color = 'white';
  }

  updateBgColor() {
    this.color = this.color === 'white' ? 'blue' : 'white'; 
  } 

}
