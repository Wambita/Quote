import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  HostListener,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnChanges {
  @Input()
  appHighlighter;

  constructor(private renderer: Renderer2, private elem: ElementRef) {}

  @HostListener('change')
  ngOnChanges() {
    if (this.appHighlighter) {
      this.addClass('custom-badge', this.elem.nativeElement);
    } else {
      this.removeClass('custom-badge', this.elem.nativeElement);
    }
  }

  addClass(className: string, element: any) {
    this.renderer.addClass(element, className);
    element.style.display = 'block';
  }

  removeClass(className: string, element: any) {
    this.renderer.removeClass(element, className);
    element.style.display = 'none';
  }
}
