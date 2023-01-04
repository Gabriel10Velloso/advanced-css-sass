import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppNatourSharedModule } from '../../projects/natours/src/app/app-natours.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'home/natours',
    loadChildren: async () => {
      const { AppNatourSharedModule } = await import('../../projects/natours/src/app/app-natours.module');
      return AppNatourSharedModule;
    },
  },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppNatourSharedModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
