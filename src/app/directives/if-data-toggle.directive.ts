import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appIfDataToggle]'
})
export class IfDataToggleDirective implements OnInit {
  @Input() value: string;
  @Input() isNeed: boolean;
  constructor(private ef: ElementRef) { }

  ngOnInit() {
    if (this.isNeed) {
      this.ef.nativeElement.setAttribute('data-toggle', this.value);
    }
  }
}
