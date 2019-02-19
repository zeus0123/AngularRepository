import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[navbar]'
})
export class NavbarDirective implements OnInit {

  @Input() navBarColor: string;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.navBarColor);
  }
}
