import { Helpers } from 'src/app/Utils/Helpers';
import { IParser } from '../iparser';
import { Weight } from '../../../models/weight';
import { Injectable } from '@angular/core';

@Injectable()
export class WeightParser {
    parsers: IParser<number>[] = [];
    constructor() {
        this.parsers = [
            new ContainsKgsParser(),
            new ContainsKParser()
        ];
    }

    public parse(input: string): Weight {
        const weight = new Weight(input, -1);

        const result = this.splitInParts(input.toLowerCase(), weight);
        if (result.weight !== null) {
            return result.weight;
        }

        const parts = result.parts;
        for (const part of parts) {
            var foundWeight = this.parsePartWithAllParsers(part, weight);
            if (foundWeight !== null) {
                return foundWeight;
            }
        }

        const weightWithAdjacentKgAfter = this.findWeightWithAdjacentKgAfter(parts, weight);
        if (weightWithAdjacentKgAfter != null) {
            return weightWithAdjacentKgAfter;
        }

        return this.findWeightWithAdjacentKgBefore(parts, weight);
    }

    private splitInParts(input: string, weight: Weight): { weight: Weight, parts: string[] } {
        // input = input.replace('gewicht', '').replace(':', '');
        let parts = input.split('/');
        let hasParsedWeight = false;
        if (parts.length === 1) {
            const parsedWeight = this.isWeight(parts[0]);
            if (parsedWeight !== undefined && parsedWeight > 0) {
                weight.value = parsedWeight;
                hasParsedWeight = true;
            }

            parts = input.split(' ');
        }

        const returnWeight = hasParsedWeight ? weight : null;
        return { weight: returnWeight, parts: parts};
    }

    private isWeight(value: string): number {
        const cleanedValue = Helpers.cleanNonNumeric(value).trim();
        if (!isNaN(Number(cleanedValue))) {
            return +value;
        }
    }

    private parsePartWithAllParsers(part: string, weight: Weight): Weight {
        for (const parser of this.parsers) {
            const value = parser.parse(part);
            if (value !== undefined) {
                weight.value = value;
                return weight;
            }
        }

        return null;
    }

    // no weight found, probably a kg is used with a space, for example 1234 kg
    private findWeightWithAdjacentKgAfter(parts: string[], weight: Weight): Weight {
        let combinedPart = '';
        for (var [index, part] of parts.entries()) {
            if (part.indexOf('kg') > -1 || part.indexOf('kgs') > -1 || part.indexOf('kg(s)') > -1) {
                if (index > 0) {
                    combinedPart = parts[index - 1] + parts[index]; // 1234kg
                    var foundWeight = this.parsePartWithAllParsers(combinedPart, weight);
                    if (foundWeight !== null) {
                        return foundWeight;
                    }
                }
            }            
        }

        return null;
    }

    // no weight found, probably a kg is used with a space, for example kg 1234
    private findWeightWithAdjacentKgBefore(parts: string[], weight: Weight): Weight {
        for (var [index, part] of parts.entries()) {
            if (part.indexOf('kg') > -1 || part.indexOf('kgs') > -1 || part.indexOf('kg(s)') > -1) {
                if (index < parts.length - 1) {
                    const combinedPart = parts[index + 1] + parts[index]; // kg 1234
                    var foundWeight = this.parsePartWithAllParsers(combinedPart, weight);
                    if (foundWeight !== null) {
                        return foundWeight;
                    }
                }
            }            
        }

        return null;
    }
}

// "7pcs / 3184kg(s) / 9cbm"
export class ContainsKgsParser implements IParser<number> {
    name = 'ContainsKgsParser';
    result: number;

    public parse(input: string): number {
        if (input.search('kg') >= 0) {
            const cleaned = input
                .replace('kg', '')
                .replace('(', '')
                .replace('s', '')
                .replace(')', '')
                .trim();
            if (cleaned.length > 0 && !isNaN(Number(cleaned))) {
                return +cleaned;
            }
        }
    }
}

// "T03 K6063"
export class ContainsKParser implements IParser<number> {
    name = 'ContainsKParser';
    result: number;

    public parse(input: string): number {
        if (input.search('k') >= 0) {
            const cleaned = input.replace('k', '').trim();
            if (!isNaN(Number(cleaned))) {
            return +cleaned;
            }
        }
    }
}
