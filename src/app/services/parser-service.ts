import { ICargoRequest } from '../models/cargo-request';
import { Piece } from '../models/piece';
import { Parsed } from '../models/parsed';
import { Weight } from '../models/weight';
import { WeightParser } from './parsers/weight-parser/weight-parser';
import { PieceParser } from './parsers/piece-parser/piece-parser';
import { Injectable } from '@angular/core';

@Injectable()
export class ParserService {

    constructor(private weightParser: WeightParser, private pieceParser: PieceParser) {
    }

    public parse(cargoRequest: ICargoRequest): Parsed {
        const parsed = new Parsed (new Weight('', 0), []);

        let filteredLines = this.splitAndFilterLines(cargoRequest);

        parsed.weight = this.parseWeight(cargoRequest.weightPosition, filteredLines);
        filteredLines = this.removeWeightRow(cargoRequest.weightPosition, filteredLines);
        parsed.pieces = this.parsePieces(cargoRequest.pieceFormat, filteredLines);

        return parsed;
    }

    private splitAndFilterLines(cargoRequest: ICargoRequest): string[] {
        let filteredLines = [];
        let lines = cargoRequest.input.split('\r\n');
        if (lines.length === 1) {
            lines = cargoRequest.input.split('\n');
        }
        filteredLines = lines.filter(el => {
            return el !== '';
        });

        return filteredLines;
    }

    public parseWeight(weightPosition: string, filteredLines: string[]): Weight {
        const weightRow = this.getWeightRow(weightPosition, filteredLines);
        const parsedWeight = this.weightParser.parse(weightRow);

        if (parsedWeight !== null && parsedWeight.value !== 0) {
            return parsedWeight;
        }

        throw new Error(`Weight could not be parsed.
 ** Remove everything except the weight, for example '7pcs / 3184kgs / 9cbm' -> '3184' **
 A. Check the weight row and remove comma\'s and dots,
 for example 1.234.0 -> 1234 or 123,0 -> 123. ||
 B. Either 'k' or 'kg' needs exists in the row,
 for example 123K or 123kg. ||
 C. No space between weight and k or kg,
 for example 234K or 234kg`);
    }

    private getWeightRow(weightPosition: string, filteredLines: string[]): string {
        let position = 0;
        if (weightPosition === 'lastRow') {
            position = filteredLines.length - 1;
        }

        return filteredLines[position];
    }

    private removeWeightRow(weightPosition: string, filteredLines: string[]): string[] {
        let position = 0;
        if (weightPosition === 'lastRow') {
            position = filteredLines.length - 1;
        }

        filteredLines.splice(position, 1);

        return filteredLines;
    }

    public parsePieces(pieceFormat: string, filteredLines: string[]): Piece[] {
        const pieces = [];
        filteredLines.forEach(line => {
            line = line.trim();

            if (line !== '') {
                if (pieceFormat.includes('orderedListNoAmount')) {
                    // split line in two parts, the list number and the actual piece part
                    const parts = line.split(' ');
                    line = '1x' + parts[parts.length - 1];
                } else if (pieceFormat.includes('noAmount')) {
                    line = '1x'.concat(line);
                }

                const piece = this.pieceParser.parse(line);
                if (piece !== null) {
                    pieces.push(piece);
                }
            }
        });

        return pieces;
    }
}
