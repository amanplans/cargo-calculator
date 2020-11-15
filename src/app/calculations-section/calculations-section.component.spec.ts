import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {FieldsetModule} from 'primeng/fieldset';

import { CalculationsSectionComponent } from './calculations-section.component';

describe('CalculationsSectionComponent', () => {
  let component: CalculationsSectionComponent;
  let fixture: ComponentFixture<CalculationsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        FieldsetModule
      ],
      declarations: [ CalculationsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
