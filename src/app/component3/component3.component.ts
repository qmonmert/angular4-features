import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html'
})
export class Component3Component {

  constructor(private renderer: Renderer2) {}

  onChangeBackground(element: HTMLElement) {
    this.renderer.setStyle(element, 'background-color', 'red');
  }

}
