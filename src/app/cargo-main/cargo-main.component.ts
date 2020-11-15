import { AfterViewInit, Component, OnInit, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ICargoRequest } from '../models/cargo-request';
import { ParserService } from '../services/parser-service';
import { Parsed } from '../models/parsed';

@Component({
  selector: 'cg-main',
  templateUrl: './cargo-main.component.html',
  styleUrls: ['./cargo-main.component.css']
})
export class CargoMainComponent implements OnInit, AfterViewInit {

  cargoRequest: ICargoRequest = {
    input: '',
    weightPosition: 'firstRow',
    pieceFormat: 'amountFirst'
  };
  parsed: Parsed;

  postError = false;
  postErrorMessage: string;

  @ViewChildren('input') inputViewChildren;

  constructor(private parserService: ParserService) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {            
    this.setFocus();
  }

  private setFocus() {
    this.inputViewChildren.first.nativeElement.focus();
  }

  public onSplit(form: NgForm): void {
    try {
      this.parsed = null;
      this.postError = false;
      this.postErrorMessage = '';

      this.parsed = this.parserService.parse(this.cargoRequest);
    } catch (e) {
      this.postError = true;
      this.postErrorMessage = (e as Error).message;
    }
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }, 50);
  }

  public reset(): void {
    this.cargoRequest = {
      input: '',
      weightPosition: 'firstRow',
      pieceFormat: 'amountFirst'
    };
    this.parsed = null;
    this.setFocus();
  }
}
