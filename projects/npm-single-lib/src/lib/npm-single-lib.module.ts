import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NpmSingleLibComponent } from './npm-single-lib.component';



@NgModule({
  declarations: [
    NpmSingleLibComponent
  ],
  imports: [
      CommonModule
  ],
  exports: [
    NpmSingleLibComponent
  ]
})
export class NpmSingleLibModule { }
