import { Component, OnInit, Input } from '@angular/core';
import { Calculations } from '../models/calculations';

@Component({
  selector: 'cg-calculations-section',
  templateUrl: './calculations-section.component.html',
  styleUrls: ['./calculations-section.component.css']
})
export class CalculationsSectionComponent {

  @Input()
  calculations: Calculations;
}
