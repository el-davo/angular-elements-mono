import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {FooterComponent} from './footer/footer.component';
import {reducer} from '../../../header/src/app/app.reducer';
import {StoreModule} from '@ngrx/store';

export function appReducer(state, action) {
  return reducer(state, action);
}

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({footer: appReducer})
  ],
  providers: [],
  declarations: [FooterComponent],
  entryComponents: [FooterComponent]
})
export class AppModule {

  constructor(injector: Injector) {
    const custom = createCustomElement(FooterComponent, {injector});

    customElements.define('app-footer', custom);
  }

  ngDoBootstrap() {
  }
}
