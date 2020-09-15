import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsspointerDirective } from './csspointer.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    CsspointerDirective,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    CsspointerDirective,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
