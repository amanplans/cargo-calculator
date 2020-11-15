import { Helpers } from 'src/app/Utils/Helpers';
import { IParser } from '../iparser';
import { Piece } from '../../../models/piece';
import { Injectable } from '@angular/core';

@Injectable()
export class PieceParser {

    parsers: IParser<Piece>[] = [];

    constructor() {
        this.parsers = [
            // 1             208         83           83
            // space as the discriminator
            new SplitWithOnlyOneDiscriminatorParser(' ')
        ];
    }

    public parse(input: string): Piece {
        const trimmedInput = input.trim();
        if (trimmedInput !== '') {
            let cleanedInput = Helpers.cleanNonNumeric(trimmedInput);
            for (const parser of this.parsers) {               
                const piece = parser.parse(cleanedInput);
                if (piece !== null) {
                    piece.originalValue = input;
                    return piece;
                }
            }
        }

        return null;
    }
}

// 1x 80x60x54cm
class SplitWithOnlyOneDiscriminatorParser implements IParser<Piece> {
    name = 'SplitWithOnlyOneDiscriminatorParser';
    result: Piece;
    discriminator: string;

    constructor(discriminator: string) {
        this.discriminator = discriminator;
    }

    public parse(input: string): Piece {
        if (input.search(this.discriminator) < 0) {
            return null;
        }

        const parts = input.split(this.discriminator);

        // remove all the parts which are empty
        const filtered = parts.filter(el => {
            return el !== '';
        });

        // if there are 3 parts, then amount is missing, put 1 for the amount
        if (filtered.length === 3) {
            filtered.unshift('1');
        }

        const piece = new Piece();
        piece.amount = Helpers.toCentimeters(filtered[0]);
        piece.length = Helpers.toCentimeters(filtered[1]);
        piece.width = Helpers.toCentimeters(filtered[2]);
        piece.height = Helpers.toCentimeters(filtered[3]);

        return piece;
    }
}
