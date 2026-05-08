import { Directive, ElementRef, inject, input, signal, afterNextRender, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  host: {
    'class': 'reveal',
    '[class.reveal--visible]': 'isVisible()',
    '[style.transition-delay]': 'delay()',
  },
})
export class RevealDirective implements OnDestroy {
  readonly delay = input('0ms');
  readonly isVisible = signal(false);

  private observer: IntersectionObserver | null = null;
  private readonly el = inject(ElementRef);

  constructor() {
    afterNextRender(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isVisible.set(true);
              this.observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      this.observer.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
