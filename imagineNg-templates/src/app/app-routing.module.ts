import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagButtonComponent } from './button-module/imag-button/imag-button.component';


const routes: Routes = [
  {path : 'buttons', component: ImagButtonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
