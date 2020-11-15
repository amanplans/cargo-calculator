import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceParser } from './piece-parser';
import { Piece } from '../../../models/piece';

describe('PieceParser', () => {
  let pieceParser: PieceParser;

  beforeEach(() => { pieceParser = new PieceParser(); });

  it('"" should return null', () => {
    expect(pieceParser.parse('')).toBeNull();
  });

  it('"1@ 120x80x112cm" should parse', () => {
    const expectedPiece = new Piece();
    expectedPiece.originalValue = '1@ 120x80x112cm';
    expectedPiece.amount = 1;
    expectedPiece.length = 120;
    expectedPiece.width = 80;
    expectedPiece.height = 112;

    expect(pieceParser.parse('1@ 120x80x112cm')).toEqual(expectedPiece);
  });

  it('"1 199x133x141" should parse', () => {
    const expectedPiece = new Piece();
    expectedPiece.originalValue = '1 199x133x141';
    expectedPiece.amount = 1;
    expectedPiece.length = 199;
    expectedPiece.width = 133;
    expectedPiece.height = 141;

    expect(pieceParser.parse('1 199x133x141')).toEqual(expectedPiece);
  });

  it('"8 x 175x120x75cm / 9.840,00" should parse', () => {
    const expectedPiece = new Piece();
    expectedPiece.originalValue = '8 x 175x120x75cm / 9.840,00';
    expectedPiece.amount = 8;
    expectedPiece.length = 175;
    expectedPiece.width = 120;
    expectedPiece.height = 75;

    expect(pieceParser.parse('8 x 175x120x75cm / 9.840,00')).toEqual(expectedPiece);
  });

  it('"1x 80x60x54cm" should parse', () => {
    const expectedPiece = new Piece();
    expectedPiece.originalValue = '1x 80x60x54cm';
    expectedPiece.amount = 1;
    expectedPiece.length = 80;
    expectedPiece.width = 60;
    expectedPiece.height = 54;

    expect(pieceParser.parse('1x 80x60x54cm')).toEqual(expectedPiece);
  });

  it('"2	207	107	124	cm contains tabs" should parse', () => {
    const expectedPiece = new Piece();
    expectedPiece.originalValue = '2	207	107	124	cm contains tabs';
    expectedPiece.amount = 2;
    expectedPiece.length = 207;
    expectedPiece.width = 107;
    expectedPiece.height = 124;

    expect(pieceParser.parse('2	207	107	124	cm contains tabs')).toEqual(expectedPiece);
  });

  it('"1             208         83           83" should parse', () => {
    const expectedPiece = new Piece();
    expectedPiece.originalValue = '1             208         83           83';
    expectedPiece.amount = 1;
    expectedPiece.length = 208;
    expectedPiece.width = 83;
    expectedPiece.height = 83;

    expect(pieceParser.parse('1             208         83           83')).toEqual(expectedPiece);
  });

  it('NULL "Dims/289x232x251cms x2 (K2920/pc)" should return null', () => {
    expect(pieceParser.parse('')).toBeNull();
  });

  it('"2 x 288 x 225 x 136cm      gross weight each 7526kg" should parse', () => {
    const expectedPiece = new Piece();
    expectedPiece.originalValue = '2 x 288 x 225 x 136cm      gross weight each 7526kg';
    expectedPiece.amount = 2;
    expectedPiece.length = 288;
    expectedPiece.width = 225;
    expectedPiece.height = 136;

    expect(pieceParser.parse('2 x 288 x 225 x 136cm      gross weight each 7526kg')).toEqual(expectedPiece);
  });

  // no amount
  it('NULL "214x210x290cm  //  3460kg" should return null', () => {
    expect(pieceParser.parse('')).toBeNull();
  });

  // no amount
  it('NULL "332x199x168 cm  9390kg" should return null', () => {
    expect(pieceParser.parse('')).toBeNull();
  });

  // with weight and total weight
  it('"1   	      341   	     182   	     237   	             2.440,00   	      2.440,00" should parse', () => {
    const expectedPiece = new Piece();
    expectedPiece.originalValue = '"1   	      341   	     182   	     237   	             2.440,00   	      2.440,00';
    expectedPiece.amount = 1;
    expectedPiece.length = 341;
    expectedPiece.width = 182;
    expectedPiece.height = 237;

    expect(pieceParser.parse('"1   	      341   	     182   	     237   	             2.440,00   	      2.440,00')).toEqual(expectedPiece);
  });

  // numbered
  it('NULL "1.  284x194x258cm/9500kgs" should return null', () => {
    expect(pieceParser.parse('')).toBeNull();
  });

  it('"1/ 60x31x24 cm" should parse', () => {
    const expectedPiece = new Piece();
    expectedPiece.originalValue = '1/ 60x31x24 cm';
    expectedPiece.amount = 1;
    expectedPiece.length = 60;
    expectedPiece.width = 31;
    expectedPiece.height = 24;

    expect(pieceParser.parse('1/ 60x31x24 cm')).toEqual(expectedPiece);
  });

  it('"2x 408x235x37: 1772 + 1926 kg" should parse', () => {
    const expectedPiece = new Piece();
    expectedPiece.originalValue = '2x 408x235x37: 1772 + 1926 kg';
    expectedPiece.amount = 2;
    expectedPiece.length = 408;
    expectedPiece.width = 235;
    expectedPiece.height = 37;

    expect(pieceParser.parse('2x 408x235x37: 1772 + 1926 kg')).toEqual(expectedPiece);
  });

  it('"1/199x133x141" should parse', () => {
    const expectedPiece = new Piece();
    expectedPiece.originalValue = '1/199x133x141';
    expectedPiece.amount = 1;
    expectedPiece.length = 199;
    expectedPiece.width = 133;
    expectedPiece.height = 141;

    expect(pieceParser.parse('1/199x133x141')).toEqual(expectedPiece);
  });

  it('"1 3,70 x 2,35 x 2,04 m / ca. 15.000 kg" should parse', () => {
    const expectedPiece = new Piece();
    expectedPiece.originalValue = '1 3,70 x 2,35 x 2,04 m / ca. 15.000 kg';
    expectedPiece.amount = 1;
    expectedPiece.length = 370;
    expectedPiece.width = 235;
    expectedPiece.height = 204;

    expect(pieceParser.parse('1 3,70 x 2,35 x 2,04 m / ca. 15.000 kg')).toEqual(expectedPiece);
  });

  it('"1 3.30	x	2.60	x	2.50" should parse', () => {
    const expectedPiece = new Piece();
    expectedPiece.originalValue = '1 3.30	x	2.60	x	2.50';
    expectedPiece.amount = 1;
    expectedPiece.length = 330;
    expectedPiece.width = 260;
    expectedPiece.height = 250;

    expect(pieceParser.parse('1 3.30	x	2.60	x	2.50')).toEqual(expectedPiece);
  });

  // it('"" should parse', () => {
  //   const expectedPiece = new Piece();
  //   expectedPiece.originalValue = '';
  //   expectedPiece.amount = ;
  //   expectedPiece.length = ;
  //   expectedPiece.width = ;
  //   expectedPiece.height = ;

  //   expect(pieceParser.parse('')).toEqual(expectedPiece);
  // });
});
