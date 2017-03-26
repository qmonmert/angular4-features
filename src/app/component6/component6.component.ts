import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { 
  isPlatformBrowser, 
  isPlatformServer, 
  isPlatformWorkerApp, 
  isPlatformWorkerUi } from '@angular/common';

@Component({
  selector: 'app-component6',
  templateUrl: './component6.component.html'
})
export class Component6Component {

  isPlatformBrowser: boolean;
  isPlatformServer: boolean;
  isPlatformWorkerApp: boolean;
  isPlatformWorkerUi: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: string) { 
    this.isPlatformBrowser = isPlatformBrowser(platformId);
    this.isPlatformServer = isPlatformServer(platformId);
    this.isPlatformWorkerApp = isPlatformWorkerApp(platformId);
    this.isPlatformWorkerUi = isPlatformWorkerUi(platformId);
  }

}
