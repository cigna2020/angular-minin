import {Directive, ElementRef, Renderer2} from '@angular/core';


@Directive({
  selector: '[appStyle]'
})

export class StyleDirectives {
  constructor(private el: ElementRef, private rend: Renderer2) {
    // this.el.nativeElement.style.color = 'red';
    this.rend.setStyle(this.el.nativeElement, 'color', 'blue');
  }
}
