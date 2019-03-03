import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagButtonComponent } from './imag-button/imag-button.component';
import { BasicButtonComponent } from './basic-button/basic-button.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [ImagButtonComponent, BasicButtonComponent, CustomButtonComponent],
  providers: [],
})
export class ButtonModule { }
