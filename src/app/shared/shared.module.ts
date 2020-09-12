import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsspointerDirective } from './csspointer.directive';


@NgModule({
  declarations: [
    CsspointerDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    CsspointerDirective
  ]
})
export class SharedModule { }
