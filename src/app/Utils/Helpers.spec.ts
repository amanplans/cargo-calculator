import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Helpers } from './Helpers';

describe('Helpers', () => {

  beforeEach(() => {});

  it('"" should return null', () => {
    expect(Helpers.toCentimeters('')).toBeNull();
  });

  it('"123" should return 123', () => {
    expect(Helpers.toCentimeters('123')).toBe(123);
  });

  it('"1.23" should return 123', () => {
    expect(Helpers.toCentimeters('1.23')).toBe(123);
  });

  it('"2,3" should return 230', () => {
    expect(Helpers.toCentimeters('2,3')).toBe(230);
  });

  it('"60" should return 60', () => {
    expect(Helpers.toCentimeters('60')).toBe(60);
  });
});
