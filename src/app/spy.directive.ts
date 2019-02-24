import {
  Directive,
  HostListener,
  ElementRef,
  OnInit,
  OnDestroy
} from "@angular/core";

@Directive({
  selector: "[appSpy]"
})
export class SpyDirective implements OnInit, OnDestroy {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    console.log("SpyDirective - onInit");
  }

  ngOnDestroy(): void {
    console.log("SpyDirective - onDestroy");
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight("yellow");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
