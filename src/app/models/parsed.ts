import { Piece } from './piece';
import { Weight } from './weight';

export class Parsed {
    weight: Weight;
    pieces: Piece[];

    constructor(weight: Weight, pieces: Piece[]) {
        this.weight = weight;
        this.pieces = pieces;
    }
}
