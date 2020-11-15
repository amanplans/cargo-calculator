import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FieldsetModule} from 'primeng/fieldset';
import { FormsModule } from '@angular/forms';

import { ParsedSectionComponent } from './parsed-section.component';
import { CalculationsSectionComponent } from '../calculations-section/calculations-section.component';
import { FinalCalculationService } from '../services/final-calculation-service';

describe('ParsedSectionComponent', () => {
  let component: ParsedSectionComponent;
  let fixture: ComponentFixture<ParsedSectionComponent>;

  beforeEach(async(() => {
    const mockFinalCalculationService = jasmine.createSpyObj(['calculate']);

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        FieldsetModule
      ],
      declarations: [
        ParsedSectionComponent,
        CalculationsSectionComponent
      ],
      providers: [
        { provide: FinalCalculationService, useValue: mockFinalCalculationService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParsedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
