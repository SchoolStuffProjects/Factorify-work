import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appSafeLink]',
  standalone: true,
  host: { '(click)': 'onConfirmLeavePage($event)'}
})
export class SafeLinkDirective {
  queryParametr = input('myapp', {alias: 'appSafeLink'});

  onConfirmLeavePage(event: MouseEvent){
    const wantsToLeave = window.confirm("Do you really wanna leave? :(")

    if(wantsToLeave){
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParametr();
      return;
    }

    event.preventDefault()
  }
}