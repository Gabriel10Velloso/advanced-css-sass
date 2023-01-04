import { AppNatoursComponent } from './app-natours.component';
import { AppNatoursRoutingModule } from './app-natours.routing';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavNatoursComponent } from './nav-natours/nav-natours.component';

@NgModule({
  declarations: [AppNatoursComponent, NavNatoursComponent],
  imports: [BrowserModule, AppNatoursRoutingModule],
  providers: [],
  bootstrap: [AppNatoursComponent],
})
export class AppNatoursModule {}


@NgModule({})
export class AppNatourSharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppNatoursModule,
      providers: []
    }
  }
}
