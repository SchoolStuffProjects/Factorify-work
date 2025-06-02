import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: '[appSafeLink]',
  standalone: true,
  host: { '(click)': 'onConfirmLeavePage($event)'},
  hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
  queryParametr = input('myapp', {alias: 'appSafeLink'});
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

  onConfirmLeavePage(event: MouseEvent){
    const wantsToLeave = window.confirm("Do you really wanna leave? :(")

    if(wantsToLeave){
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParametr();
      return;
    }

    event.preventDefault()
  }
}