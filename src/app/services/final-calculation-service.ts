import { Injectable } from '@angular/core';
import { Calculations } from '../models/calculations';
import { Parsed } from '../models/parsed';

@Injectable()
export class FinalCalculationService {

    calculations: Calculations = {} as Calculations;

    calculate(parsed: Parsed): Calculations {

        this.calculations.grossWeight = parsed.weight.value;

        this.calculations.numberOfPieces = 0;
        this.calculations.volume = 0;
        parsed.pieces.forEach(piece => {
            this.calculations.numberOfPieces += piece.amount;
            const volumeCm3 = piece.amount * piece.length * piece.width * piece.height;
            this.calculations.volume += volumeCm3 / 1000.0 / 1000.0;
        });

        this.calculations.weightPerPiece = parsed.weight.value / this.calculations.numberOfPieces;
        this.calculations.chargeableWeight = this.calculations.volume / 0.006;
        this.calculations.density = this.calculations.volume / parsed.weight.value * 1000;

        return this.calculations;
    }
}
