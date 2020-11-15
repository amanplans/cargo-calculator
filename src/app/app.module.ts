import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CalculationsSectionComponent } from './calculations-section/calculations-section.component';
import { CargoMainComponent } from './cargo-main/cargo-main.component';
import { FieldsetModule } from 'primeng/fieldset';
import { FinalCalculationService } from './services/final-calculation-service';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NgModule } from '@angular/core';
import { ParsedSectionComponent } from './parsed-section/parsed-section.component';
import { ParserService } from './services/parser-service';
import { PieceParser } from './services/parsers/piece-parser/piece-parser';
import { RadioButtonModule } from 'primeng/radiobutton';
import { WeightParser } from './services/parsers/weight-parser/weight-parser';

@NgModule({
  declarations: [
    AppComponent,
    CargoMainComponent,
    ParsedSectionComponent,
    CalculationsSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    BrowserAnimationsModule,
    InputTextareaModule,
    RadioButtonModule,
    FieldsetModule
  ],
  providers: [
    ParserService,
    FinalCalculationService,
    PieceParser,
    WeightParser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
