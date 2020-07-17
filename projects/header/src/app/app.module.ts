import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {HeaderComponent} from './header/header.component';
import {createCustomElement} from '@angular/elements';
import {reducer} from './app.reducer';
import {StoreModule} from '@ngrx/store';

export function appReducer(state, action) {
  return reducer(state, action);
}

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({header: appReducer})
  ],
  declarations: [
    HeaderComponent
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
