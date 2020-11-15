import { AppComponent } from './app.component';
import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculationsSectionComponent } from './calculations-section/calculations-section.component';
import { CargoMainComponent } from './cargo-main/cargo-main.component';
import { FieldsetModule } from 'primeng/fieldset/';
import { FormsModule } from '@angular/forms';
import { ICargoRequest } from './models/cargo-request';
import { Parsed } from './models/parsed';
import { ParsedSectionComponent } from './parsed-section/parsed-section.component';
import { ParserService } from './services/parser-service';
import { RadioButtonModule } from 'primeng/radiobutton';

describe('AppComponent', () => {
  const mockRequestParserService = jasmine.createSpyObj(['parse']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        FieldsetModule,
        RadioButtonModule
      ],
      declarations: [
        AppComponent,
        CargoMainComponent,
        ParsedSectionComponent,
        CalculationsSectionComponent
      ],
      providers: [
        { provide: ParserService, useValue: mockRequestParserService }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cargo-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.cargoRequest = {} as ICargoRequest;
    app.parsed = {} as Parsed;
    expect(app.title).toEqual('cargo-frontend');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('cargo-frontend app is running!');
  // });
});
