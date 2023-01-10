import { NgModule } from '@angular/core';
import { AppNatourSharedModule } from '../../projects/natours/src/app/app-natours.module';
import { AppTrilloSharedModule } from '../../projects/trillo/src/app/app-trillo.module';
import { HomeComponent } from './home/home.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routerOptions: ExtraOptions = {
  // scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  // scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'natours',
    loadChildren: async () => {
      const { AppNatourSharedModule } = await import('../../projects/natours/src/app/app-natours.module');
      return AppNatourSharedModule;
    },
  },
  {
    path: 'trillo',
    loadChildren: async () => {
      const { AppTrilloSharedModule } = await import('../../projects/trillo/src/app/app-trillo.module');
      return AppTrilloSharedModule;
    },
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions),
    AppNatourSharedModule.forRoot(),
    AppTrilloSharedModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
