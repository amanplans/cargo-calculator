import { ParserService } from '../services/parser-service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {FieldsetModule} from 'primeng/fieldset';
import {RadioButtonModule} from 'primeng/radiobutton';

import { CargoMainComponent } from './cargo-main.component';
import { ParsedSectionComponent } from '../parsed-section/parsed-section.component';
import { CalculationsSectionComponent } from '../calculations-section/calculations-section.component';
import { ICargoRequest } from '../models/cargo-request';
import { Parsed } from '../models/parsed';

describe('CargoMainComponent', () => {
  let component: CargoMainComponent;
  let fixture: ComponentFixture<CargoMainComponent>;

  beforeEach(async(() => {
    const mockRequestParserService = jasmine.createSpyObj(['parse']);

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        FieldsetModule,
        RadioButtonModule
      ],
      declarations: [
        CargoMainComponent,
        ParsedSectionComponent,
        CalculationsSectionComponent
      ],
      providers: [
        { provide: ParserService, useValue: mockRequestParserService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(CargoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.cargoRequest = {} as ICargoRequest;
    component.parsed = {} as Parsed;
    expect(component).toBeTruthy();
  });
});
