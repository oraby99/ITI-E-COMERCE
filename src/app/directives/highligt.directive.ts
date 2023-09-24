import { HostListener } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighligt]'
})
export class HighligtDirective {

  constructor(public elem:ElementRef) 
  {
     this.elem.nativeElement.style.color='black';
     this.elem.nativeElement.style.fontweight='bold';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.elem.nativeElement.style.color='whitesmoke';
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.elem.nativeElement.style.color='darkblue';
  }
  
}
