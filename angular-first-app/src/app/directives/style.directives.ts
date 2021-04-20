import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {colors} from '@angular/cli/utilities/color';


@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  @Input('appStyle') newColor: string;
  @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string};

  constructor(private el: ElementRef, private rend: Renderer2) {
    // this.el.nativeElement.style.color = 'red';
    console.log('render2: ', rend);
    this.rend.setStyle(this.el.nativeElement, 'color', 'blue');
  }

  @HostListener('click', ['$event.target']) onClick(event: Event): void {
    // console.log(event);
    this.rend.setStyle(this.el.nativeElement, 'color', 'yellow');
    this.rend.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    this.rend.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    this.rend.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);

  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.rend.setStyle(this.el.nativeElement, 'color', this.newColor);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.rend.setStyle(this.el.nativeElement, 'color', null);
    this.rend.setStyle(this.el.nativeElement, 'border', null);
    this.rend.setStyle(this.el.nativeElement, 'fontWeight', null);
    this.rend.setStyle(this.el.nativeElement, 'borderRadius', null);

  }
}
