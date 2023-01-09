import { AppNatoursComponent } from './app-natours.component';
import { AppNatoursRoutingModule } from './app-natours.routing';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavNatoursComponent } from './nav-natours/nav-natours.component';
import { HeaderNatoursComponent } from './header-natours/header-natours.component';
import { ExcitingNatoursComponent } from './exciting-natours/exciting-natours.component';
import { FeaturesNatoursComponent } from './features-natours/features-natours.component';

@NgModule({
  declarations: [AppNatoursComponent, NavNatoursComponent, HeaderNatoursComponent, ExcitingNatoursComponent, FeaturesNatoursComponent],
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
