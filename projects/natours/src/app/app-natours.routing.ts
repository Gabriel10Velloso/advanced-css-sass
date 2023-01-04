import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNatoursComponent } from './home-natours/home-natours.component';

const routes: Routes = [
  { path: 'natours', component: HomeNatoursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppNatoursRoutingModule { }
