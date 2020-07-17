import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {HeaderComponent} from './header/header.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [HeaderComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(HeaderComponent, {injector});

    customElements.define('app-header', custom);
  }

  ngDoBootstrap() {
  }
}
