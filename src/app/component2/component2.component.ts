import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html'
})
export class Component2Component implements OnInit {

  authenticated: boolean;

  ngOnInit() {
    this.authenticated = false;
  }

  login() {
    this.authenticated = true;
  }

  logout() {
    this.authenticated = false;
  }

}
