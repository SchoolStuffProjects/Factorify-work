import { CurrencyPipe, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, inject } from '@angular/core';
import localeCs from '@angular/common/locales/cs';
import { InvestmentService } from '../investment.service';

registerLocaleData(localeCs);

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css'],
  providers: [{ provide: LOCALE_ID, useValue: 'cs-CZ' }]
})
export class InvestmentResultsComponent {
  private investmetServce = inject(InvestmentService)

  get results(){
    return this.investmetServce.resultData;
  }
}
