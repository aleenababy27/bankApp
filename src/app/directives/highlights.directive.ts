import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private el:ElementRef) { 

    this.el.nativeElement.style.backgroundColor="rgb(231, 165, 66)"

  }

}
