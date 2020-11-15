import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Parsed } from '../models/parsed';
import { FinalCalculationService } from '../services/final-calculation-service';
import { Calculations } from '../models/calculations';

@Component({
  selector: 'cg-parsed-section',
  templateUrl: './parsed-section.component.html',
  styleUrls: ['./parsed-section.component.css']
})
export class ParsedSectionComponent implements OnInit, OnChanges {

  @Input() parsed: Parsed;
  
  calculations: Calculations;

  constructor(private finalCalculationService: FinalCalculationService) {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.calculate();
  }

  calculate() {
    this.calculations = this.finalCalculationService.calculate(this.parsed);
  }
}
