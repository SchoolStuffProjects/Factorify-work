import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  iinitialInvestment = signal("0");
  aannualInvestment = signal("0");
  eexpectedReturn = signal("2.5");
  dduration = signal("10");
  iinflationRate = signal("3")

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.iinitialInvestment(),
      duration: +this.dduration(),
      expectedReturn: +this.eexpectedReturn(),
      annualInvestment: +this.aannualInvestment(),
      inflationRate: +this.iinflationRate()
    });

    this.iinitialInvestment.set('0');
    this.aannualInvestment.set('0');
    this.eexpectedReturn.set('2.5');
    this.dduration.set('10');
  }

}
