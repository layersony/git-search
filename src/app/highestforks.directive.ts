import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.appHighestforks'
})
export class HighestforksDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor='#875ACB';
    this.elem.nativeElement.style.backgroundColor='#fff';
  }

}
