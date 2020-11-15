// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { RequestParserService } from './request-parser-service';
// import { ICargoRequest } from '../models/cargo-request';
// import { Parsed } from '../models/parsed';
// import { Piece } from '../models/piece';
// import { Weight } from '../models/weight';

// describe('RequestParserService', () => {
//   let requestParserService: RequestParserService;

//   beforeEach(() => { requestParserService = new RequestParserService(); });

//   it('weight first row, AxLxWxH should return parsed', () => {
//     const cargoRequest = {
//         input: `8pcs/32782kg
// 2 x 288 x 225 x 136cm
// 2 x 445 x 95 x 135cm
// 2 x 273 x 193 x 118cm
// 2 x 393 x 88 x 146cm`,
//     weightPosition: 'firstRow',
//     pieceFormat: 'amountFirst'
//     } as ICargoRequest;
//     const parsed = new Parsed(
//         {
//             originalValue: '8pcs/32782kg',
//             value: 32782
//         } as Weight,
//         [
//             {
//                 originalValue: '2 x 288 x 225 x 136cm',
//                 amount: 2,
//                 length: 288,
//                 height: 225,
//                 width: 136
//             } as Piece,
//             {
//                 originalValue: '2 x 445 x 95 x 135cm',
//                 amount: 2,
//                 length: 445,
//                 height: 95,
//                 width: 135
//             } as Piece,
//             {
//                 originalValue: '2 x 273 x 193 x 118cm',
//                 amount: 2,
//                 length: 273,
//                 height: 193,
//                 width: 118
//             } as Piece,
//             {
//                 originalValue: '2 x 393 x 88 x 146cm',
//                 amount: 2,
//                 length: 393,
//                 height: 88,
//                 width: 146
//             } as Piece,
//         ] as Piece[]
//     );
//     // expect(requestParserService.parse(cargoRequest)).toEqual(parsed);
//     // expect(Object.assign(requestParserService.parse(cargoRequest), Parsed)).toEqual(Object.assign(parsed, Parsed));
//   });
// });
