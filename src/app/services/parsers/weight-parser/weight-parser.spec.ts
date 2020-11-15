import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightParser } from './weight-parser';
import { Weight } from '../../../models/weight';

describe('WeightParser', () => {
  let weightParser: WeightParser;

  beforeEach(() => { weightParser = new WeightParser(); });

  it('"" should return null', () => {
    expect(weightParser.parse('')).toBeNull();
  });

  it('"2345" should return 2345', () => {
    const expectedWeight = new Weight('2345', 2345);

    expect(weightParser.parse('2345')).toEqual(expectedWeight);
  });

  it('"7pcs / 3184kgs / 9cbm" should parse', () => {
    const expectedWeight = new Weight('7pcs / 3184kgs / 9cbm', 3184);

    expect(weightParser.parse('7pcs / 3184kgs / 9cbm')).toEqual(expectedWeight);
  });

  it('"7pcs / 3184kg(s) / 9cbm" should parse', () => {
    const expectedWeight = new Weight('7pcs / 3184kg(s) / 9cbm', 3184);

    expect(weightParser.parse('7pcs / 3184kg(s) / 9cbm')).toEqual(expectedWeight);
  });

  it('"T03 K6063" should parse', () => {
    const expectedWeight = new Weight('T03 K6063', 6063);

    expect(weightParser.parse('T03 K6063')).toEqual(expectedWeight);
  });

  it('"11pcs mit 35637kg  (155,687 cbm)" should parse', () => {
    const expectedWeight = new Weight('11pcs mit 35637kg  (155,687 cbm)', 35637);

    expect(weightParser.parse('11pcs mit 35637kg  (155,687 cbm)')).toEqual(expectedWeight);
  });

  it('"12 Pcs. 1741 kg  general cargo nr" should parse', () => {
    const expectedWeight = new Weight('12 Pcs. 1741 kg  general cargo nr', 1741);

    expect(weightParser.parse('12 Pcs. 1741 kg  general cargo nr')).toEqual(expectedWeight);
  });

  it('"13 Pcs. 1741 kgs  general cargo nr" should parse', () => {
    const expectedWeight = new Weight('13 Pcs. 1741 kgs  general cargo nr', 1741);

    expect(weightParser.parse('13 Pcs. 1741 kgs  general cargo nr')).toEqual(expectedWeight);
  });

  it('"14 Pcs. 1741 kg(s)  general cargo nr" should parse', () => {
    const expectedWeight = new Weight('14 Pcs. 1741 kg(s)  general cargo nr', 1741);

    expect(weightParser.parse('14 Pcs. 1741 kg(s)  general cargo nr')).toEqual(expectedWeight);
  });

  it('"15 Pcs. kg 1741  general cargo nr" should parse', () => {
    const expectedWeight = new Weight('15 Pcs. kg 1741  general cargo nr', 1741);

    expect(weightParser.parse('15 Pcs. kg 1741  general cargo nr')).toEqual(expectedWeight);
  });

  it('NULL "2/2867kg – not stackable" should return null', () => {

    expect(weightParser.parse('2/2867kg – not stackable')).toBeNull();
  });

  it('NULL "18 Kisten  /  10.798.0 kg  /  39.309 cbm TAO" should return null', () => {
    expect(weightParser.parse('')).toBeNull();
  });

  it('NULL "Gewicht:	3247,00 kg" should return null', () => {
    expect(weightParser.parse('')).toBeNull();
  });
});
