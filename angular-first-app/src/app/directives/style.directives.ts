import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {colors} from '@angular/cli/utilities/color';


@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  constructor(private el: ElementRef, private rend: Renderer2) {
    // this.el.nativeElement.style.color = 'red';
    console.log('render2: ', rend);
    this.rend.setStyle(this.el.nativeElement, 'color', 'blue');
  }

  @HostListener('click', ['$event.target']) onClick(event: Event): void {
    // console.log(event);
    this.rend.setStyle(this.el.nativeElement, 'color', 'yellow');
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.rend.setStyle(this.el.nativeElement, 'color', 'green');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.rend.setStyle(this.el.nativeElement, 'color', null);
  }
}
