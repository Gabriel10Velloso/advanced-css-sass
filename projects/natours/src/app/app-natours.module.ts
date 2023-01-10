import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppNatoursComponent } from './app-natours.component';
import { AppNatoursRoutingModule } from './app-natours.routing';
import { BookNatoursComponent } from './book-natours/book-natours.component';
import { ExcitingNatoursComponent } from './exciting-natours/exciting-natours.component';
import { FeaturesNatoursComponent } from './features-natours/features-natours.component';
import { FooterNatoursComponent } from './footer-natours/footer-natours.component';
import { HeaderNatoursComponent } from './header-natours/header-natours.component';
import { NavNatoursComponent } from './nav-natours/nav-natours.component';
import { StoriesNatoursComponent } from './stories-natours/stories-natours.component';
import { ToursNatoursComponent } from './tours-natours/tours-natours.component';

@NgModule({
  declarations: [
    AppNatoursComponent,
    NavNatoursComponent,
    HeaderNatoursComponent,
    ExcitingNatoursComponent,
    FeaturesNatoursComponent,
    ToursNatoursComponent,
    StoriesNatoursComponent,
    BookNatoursComponent,
    FooterNatoursComponent,
  ],
  imports: [BrowserModule, AppNatoursRoutingModule],
  providers: [  { provide: Window, useValue: window } ],
  bootstrap: [AppNatoursComponent],
})
export class AppNatoursModule {}

@NgModule({})
export class AppNatourSharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppNatoursModule,
      providers: [],
    };
  }
}
