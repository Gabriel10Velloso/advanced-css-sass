import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTrilloComponent } from './app-trillo.component';

const routes: Routes = [
  { path: 'trillo', component: AppTrilloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppTrilloRoutingModule { }
