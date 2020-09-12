import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cssPointer]'
})
export class CsspointerDirective {

  @HostBinding('style.cursor') cursor: string = 'pointer';

  constructor() { }

}
