import { Injectable } from '@angular/core';
import { InvestmentInput } from './investment-input.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  resultData?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    valueAfterInflation: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
    inflationLoss: number;
    buyingPower: number;
  }[];

  CalculateInvestmentResults(data: InvestmentInput) {
    const {
      initialInvestment,
      duration,
      expectedReturn,
      annualInvestment,
      inflationRate
    } = data;

    const annualData = [];
    let investmentValue = initialInvestment;
    let accumulatedInflationLoss = 0;

    for (let year = 1; year <= duration; year++) {
      const interestEarned = investmentValue * (expectedReturn / 100);

      investmentValue += interestEarned + annualInvestment;

      const valueAfterInflation = investmentValue / Math.pow(1 + inflationRate / 100, year);

      const inflationLoss = investmentValue - valueAfterInflation;
      accumulatedInflationLoss += inflationLoss;

      const totalInvested = initialInvestment + annualInvestment * year;
      const totalInterest = investmentValue - totalInvested;

      const buyingPower = investmentValue - inflationLoss;

      annualData.push({
        year,
        interest: interestEarned,
        valueEndOfYear: investmentValue,
        valueAfterInflation,
        annualInvestment,
        totalInterest,
        totalAmountInvested: totalInvested,
        inflationLoss,
        buyingPower
      });
    }

    this.resultData = annualData;
  }
}