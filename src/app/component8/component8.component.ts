import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-component8',
  templateUrl: './component8.component.html'
})
export class Component8Component implements OnInit {

  user: Observable<{}>;

  ngOnInit() {    
    this.user = this.getAsyncData();
  }
  
  getAsyncData() {
    return Observable.of({ firstName: 'Steve', lastName: 'Jobs' }).delay(2000);
  }

}
