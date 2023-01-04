import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppNatoursComponent } from './app-natours.component';

const routes: Routes = [
  { path: 'home/natours', component: AppNatoursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppNatoursRoutingModule { }
