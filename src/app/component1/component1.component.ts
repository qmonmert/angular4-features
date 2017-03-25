import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html'
})
export class Component1Component implements OnInit {

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
