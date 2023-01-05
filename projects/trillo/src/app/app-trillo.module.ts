import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppTrilloRoutingModule } from './app-trillo.routing';
import { AppTrilloComponent } from './app-trillo.component';

@NgModule({
  declarations: [
    AppTrilloComponent
  ],
  imports: [
    BrowserModule,
    AppTrilloRoutingModule
  ],
  providers: [],
  bootstrap: [AppTrilloComponent]
})
export class AppTrilloModule { }

@NgModule({})
export class AppTrilloSharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppTrilloModule,
      providers: []
    }
  }
}

