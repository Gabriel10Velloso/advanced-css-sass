import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppNatoursRoutingModule } from './app-natours.routing';
import { AppNatoursComponent } from './app-natours.component';

@NgModule({
  declarations: [AppNatoursComponent],
  imports: [BrowserModule, AppNatoursRoutingModule],
  providers: [],
  bootstrap: [AppNatoursComponent],
})
export class AppNatoursModule {}
