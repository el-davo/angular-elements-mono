import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  imports: [
    BrowserModule
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
